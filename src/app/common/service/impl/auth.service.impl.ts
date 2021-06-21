import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { retry, catchError } from 'rxjs/operators';
import { AuthModel } from "../../model/AuthModel";
import { AuthToken } from "../../model/AuthToken";
import { AuthService } from "../auth.service.interface";

@Injectable({
    providedIn: "root",
})
export class AuthServiceImpl implements AuthService<AuthModel, AuthToken> {
    authToken?: AuthToken | undefined;
    endpoint = "http://localhost:8082/oauth/token";

    constructor(private httpClient : HttpClient) {}

    checkTokenExpiration(): Boolean {
        if(!this.authToken) {
            return true;
        }
        if(this.authToken.expires>=Date.now()) {
            return true;
        }
        return false;
    }
    doLoginWithCredential(authModel: AuthModel): Observable<AuthToken> {
        let httpHeader = {
            headers: new HttpHeaders({
                'content-type': 'application/x-www-form-urlencoded',
                'cache-control': 'no-cache',
                'Authorization': 'Basic bW9iaWxlOm1vYmlsZQ==',
                'Access-Control-Allow-Origin': '*'
            })
        }
        let body = `grant_type=${authModel.grant_type}&username=${authModel.username}&password=${authModel.password}`;
        return this.httpClient.post<AuthToken>(this.endpoint,body,httpHeader)
            .pipe(retry(1),catchError(this.errorHandle));
    }
    doLoginWithRefreshToken(refreshToken: string): Observable<AuthToken> {
        throw new Error("Method not implemented.");
    }
    doRegister(registerModel: AuthModel): Observable<boolean> {
        throw new Error("Method not implemented.");
    }
    errorHandle(error: any) {
        let msg =  {
            'message':'',
            'code': ''
        };
        if(error.error && error.error instanceof ErrorEvent) {
            msg.message = error.error.message;
        } else {
            msg.code = error.status;
            msg.message = error.message;
        }
        return throwError(msg);
    }

}
import { Observable } from "rxjs";
import { AuthModel } from "../model/AuthModel";
import { AuthToken } from "../model/AuthToken";

export interface AuthService<T extends AuthModel,R> {
    authToken?: AuthToken;
    checkTokenExpiration() : Boolean;
    doLoginWithCredential(authModel: T) : Observable<R>;
    doLoginWithRefreshToken(refreshToken: string) : Observable<R>;
    doRegister(registerModel: T) : Observable<boolean>;
}
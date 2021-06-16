import { Injectable } from "@angular/core";
import { AuthModel } from "../../model/AuthModel";
import { AuthToken } from "../../model/AuthToken";
import { AuthService } from "../auth.service.interface";

@Injectable({
    providedIn: "root",
})
export class AuthServiceImpl implements AuthService<AuthModel, AuthToken> {
    doLoginWithCredential(authModel: AuthModel): AuthToken {
        throw new Error("Method not implemented.");
    }
    doLoginWithRefreshToken(refreshToken: string): AuthToken {
        throw new Error("Method not implemented.");
    }
    doRegister(registerModel: AuthModel): boolean {
        throw new Error("Method not implemented.");
    }
    doLogin = (authModel:AuthModel) : AuthToken => {
        return new AuthToken("",2,"");
    }
}
import { Injectable } from "@angular/core";
import { AuthModel } from "../../model/AuthModel";
import { AuthToken } from "../../model/AuthToken";
import { AuthService } from "../auth.service.interface";

@Injectable({
    providedIn: "root",
})
export class AuthServiceImpl implements AuthService<AuthModel, AuthToken> {
    doLogin = (authModel:AuthModel) : AuthToken => {
        return new AuthToken("",2,"");
    }
}
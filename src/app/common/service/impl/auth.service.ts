import { Injectable, Injector } from '@angular/core';
import { AuthModel } from '../../model/AuthModel';
import { AuthToken } from '../../model/AuthToken';
import { RegisterModel } from '../../model/RegisterModel';
import { AuthService } from '../auth.service.interface';

@Injectable({
  providedIn: "root"
})
export class AuthServiceImpl implements AuthService<AuthModel, AuthToken> {

  constructor() { 
    console.log("auth service impl constructor called");
   }
  doLoginWithCredential(authModel: AuthModel) {
    console.log("doLoginWithCredential called");
    return new AuthToken("",2,"");
  };
  doLoginWithRefreshToken(refreshToken: string) {
    console.log("doLoginWithRefreshToken called");
    return new AuthToken("",2,"");
  };
  doRegister(registerModel: RegisterModel) {
    return false;
  }
}

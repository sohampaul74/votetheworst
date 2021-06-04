import { AuthModel } from "../model/AuthModel";

export interface AuthService<T extends AuthModel,R> {
    doLoginWithCredential(authModel: T) : R;
    doLoginWithRefreshToken(refreshToken: string) : R;
    doRegister(registerModel: T) : boolean;
}
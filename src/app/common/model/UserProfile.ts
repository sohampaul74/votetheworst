import { AuthToken } from "./AuthToken";
import { ModalWindowOptions } from "./ModalWindowOptions";

export class UserProfile {
    isAuthenticated ?: boolean;
    username ?: string;
    loginTime ?: Number;
    authToken ?: AuthToken;
    modalWindowOption ?: ModalWindowOptions;
    identifier?: Number;

    constructor() {
        this.isAuthenticated = false;
        this.username = "anon";
        this.loginTime = 0;
        this.authToken = undefined;
        this.modalWindowOption = new ModalWindowOptions();
        this.identifier = Date.now();
    }
}
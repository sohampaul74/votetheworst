export class AuthToken {
    readonly access_token: string;
    readonly expires: number;
    readonly refresh_token: string;

    constructor(access_token:string, expires:number, refresh_token:string) {
        this.access_token = access_token;
        this.expires = expires;
        this.refresh_token = refresh_token;
    }
}
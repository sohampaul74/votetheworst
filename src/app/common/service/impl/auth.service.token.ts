import { InjectionToken } from "@angular/core";
import { AuthModel } from "../../model/AuthModel";
import { AuthToken } from "../../model/AuthToken";
import { AuthService } from "../auth.service.interface";

export const AUTH_SERVICE = new InjectionToken<AuthService<AuthModel,AuthToken>>('auth-service');
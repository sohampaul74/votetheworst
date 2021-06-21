import { Component, EventEmitter, Inject, Input, OnInit, Output } from '@angular/core';
import { AuthModel } from '../../model/AuthModel';
import { AuthToken } from '../../model/AuthToken';
import { AuthService } from '../../service/auth.service.interface';
import { AUTH_SERVICE } from '../../service/impl/auth.service.token';

@Component({
  selector: 'app-loginn',
  templateUrl: './loginn.component.html',
  styleUrls: ['./loginn.component.css'],
})
export class LoginnComponent implements OnInit {

  @Output() forgotPassword: EventEmitter<any> = new EventEmitter();
  @Output() authenticationSuccess: EventEmitter<AuthToken> = new EventEmitter();
  authModel: AuthModel = new AuthModel();
  isSubmitted: boolean = false;

  constructor(@Inject(AUTH_SERVICE) private authService: AuthService<AuthModel,AuthToken>) {
  }

  ngOnInit(): void {
  }

  showForgotPassword() {
    this.forgotPassword.emit(1);
  }
  doLogin(loginForm: any){
    this.isSubmitted = true;
    if(loginForm.invalid) {
      Object.keys(loginForm.controls).forEach(key => {
        loginForm.controls[key].markAsTouched();
      });
      this.isSubmitted = false;
      return;
    }
    this.authService.doLoginWithCredential(this.authModel).subscribe(
      ( data: any ) => { 
        this.authService.authToken = new AuthToken(data.access_token,data.expires_in+Date.now(),data.refresh_token);
        this.authenticationSuccess.emit(this.authService.authToken);
      }, 
      ( error: any ) => { 
        this.isSubmitted = false;
        return;
      }
    );
  }
}

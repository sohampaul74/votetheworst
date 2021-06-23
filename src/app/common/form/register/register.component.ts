import { Component, EventEmitter, Inject, OnInit, Optional, Output, SkipSelf } from '@angular/core';
import { AppResponse } from '../../model/AppResponse';
import { AuthModel } from '../../model/AuthModel';
import { AuthToken } from '../../model/AuthToken';
import { RegisterModel } from '../../model/RegisterModel';
import { AuthService } from '../../service/auth.service.interface';
import { AUTH_SERVICE } from '../../service/impl/auth.service.token';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  @Output() registrationSuccess: EventEmitter<string> = new EventEmitter();

  registerModel: RegisterModel = new RegisterModel();
  isSubmitted=false;
  isSuccess = false;
  constructor(@Inject(AUTH_SERVICE) @SkipSelf()  private authService:AuthService<AuthModel, AuthToken>) { }

  ngOnInit(): void {
  }

  doRegister(registerForm : any) {
    this.isSubmitted = true;
    console.log("formInvalid: "+registerForm.invalid);
    if(registerForm.invalid) {
      Object.keys(registerForm.controls).forEach(key => {
        registerForm.controls[key].markAsTouched();
      });
      this.isSubmitted = false;
      return;
    }
    this.authService.doRegister(this.registerModel).subscribe(
      (data:AppResponse)=>{
        console.log(data);
        if(data.responseCode === 200) {
          this.isSuccess = true;
          setTimeout(()=>{
            this.registrationSuccess.emit("SUCCESS");
          },1000);
        } else {
          this.isSubmitted = false;
          console.log(data.responseMessage);
        }
      },
      (error: any)=>{
        this.isSubmitted = false;
        return;
      }
    );
  }

}

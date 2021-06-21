import { Component, Inject, OnInit, Optional, SkipSelf } from '@angular/core';
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

  registerModel: RegisterModel = new RegisterModel();
  isSubmitted=false;
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
    console.log("Register called");
    console.log(registerForm);
    setTimeout(()=>{
      this.isSubmitted = false;
    },2000);

  }

}

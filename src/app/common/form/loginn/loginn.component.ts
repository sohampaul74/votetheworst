import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AuthModel } from '../../model/AuthModel';

@Component({
  selector: 'app-loginn',
  templateUrl: './loginn.component.html',
  styleUrls: ['./loginn.component.css']
})
export class LoginnComponent implements OnInit {

  @Output() forgotPassword: EventEmitter<any> = new EventEmitter();
  authModel: AuthModel = new AuthModel();
  isSubmitted: boolean = false;

  ngOnInit(): void {
  }

  showForgotPassword() {
    this.forgotPassword.emit(1);
  }
  doLogin(loginForm: any){
    this.isSubmitted = true;
    console.log("formInvalid: "+loginForm.invalid);
    if(loginForm.invalid) {
      Object.keys(loginForm.controls).forEach(key => {
        loginForm.controls[key].markAsTouched();
      });
      this.isSubmitted = false;
      return;
    }
    console.log("login called");
    console.log(loginForm);
    setTimeout(()=>{
      this.isSubmitted = false;
    },2000);
  }
}

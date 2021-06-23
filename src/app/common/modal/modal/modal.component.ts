import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AuthToken } from '../../model/AuthToken';
import { ModalWindowOptions } from '../../model/ModalWindowOptions';
import {ModalWindowType} from '../../model/ModalWindowType';
import { UserProfile } from '../../model/UserProfile';
declare var $:any;
@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  @Input() userProfile: UserProfile | undefined;
  @Output() userProfileChange = new EventEmitter<UserProfile>();
  //@Output() showHideModalWindow: EventEmitter<ModalWindowOptions> = new EventEmitter();
  ModalWindowType = ModalWindowType;


  ngOnInit(): void {
    console.log("modal component: "+this.userProfile?.modalWindowOption?.isWindowOpen);
  }
  closeThis(): void {
    if(this.userProfile?.modalWindowOption) {
      this.userProfile.modalWindowOption.isWindowOpen = false;
      this.userProfileChange.emit(this.userProfile);
      //this.showHideModalWindow.emit(this.userProfile.modalWindowOption);
    }
  }
  showForgotPassword(args: any) : void {
    if(this.userProfile?.modalWindowOption) {
      this.userProfile.modalWindowOption.isWindowOpen = true;
      this.userProfile.modalWindowOption.windowType = "forgot" as ModalWindowType;
      this.userProfileChange.emit(this.userProfile);
      //this.showHideModalWindow.emit(this.userProfile.modalWindowOption);
    }
  }

  showLoginWindow() : void {
    if(this.userProfile?.modalWindowOption) {
      this.userProfile.modalWindowOption.windowType = "login" as ModalWindowType;
      this.userProfileChange.emit(this.userProfile);
    }
  }

  updateView(args: AuthToken) : void {
    console.log(args);
    if(this.userProfile) {
      this.userProfile.authToken = args;
      this.userProfile.isAuthenticated = true;
      this.userProfile.loginTime = Date.now();
    }
    this.closeThis();
  }
}

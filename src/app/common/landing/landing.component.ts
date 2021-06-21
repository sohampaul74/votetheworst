import { ThrowStmt } from '@angular/compiler';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ModalWindowOptions } from '../model/ModalWindowOptions';
import { ModalWindowType } from '../model/ModalWindowType';
import { UserProfile } from '../model/UserProfile';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  @Input() userProfile: UserProfile | undefined;
  @Output() userProfileChange = new EventEmitter<UserProfile>();
  //@Output() toggleModalWindow:EventEmitter<ModalWindowOptions> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  toggleRegister() : void {
    if(this.userProfile?.modalWindowOption) { 
      this.userProfile.modalWindowOption.windowType = "register" as ModalWindowType;
      this.userProfile.modalWindowOption.isWindowOpen = true;
      this.userProfileChange.emit(this.userProfile);
      //this.toggleModalWindow.emit(this.userProfile.modalWindowOption);
    }
  }
}

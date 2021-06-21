import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { ModalWindowOptions } from '../../model/ModalWindowOptions';
import { ModalWindowType } from '../../model/ModalWindowType';
import { UserProfile } from '../../model/UserProfile';
declare var $ : any;

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.css']
})
export class EntryComponent implements OnInit {

  @Input() userProfile: UserProfile | undefined;
  @Output() userProfileChange = new EventEmitter<UserProfile>();
  //@Output() showHideModal: EventEmitter<ModalWindowOptions> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  toggleComponent(type: string): void {
    console.log("in entry component "+this.userProfile?.modalWindowOption?.isWindowOpen);
    if(this.userProfile?.modalWindowOption) {
      this.userProfile.modalWindowOption.isWindowOpen = !this.userProfile.modalWindowOption.isWindowOpen;
      this.userProfile.modalWindowOption.windowType = type as ModalWindowType;
      this.userProfileChange.emit(this.userProfile);
      //this.showHideModal.emit(this.userProfile.modalWindowOption);
    }
  }

}

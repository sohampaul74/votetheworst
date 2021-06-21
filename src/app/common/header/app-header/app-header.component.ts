import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ModalWindowOptions } from '../../model/ModalWindowOptions';
import { UserProfile } from '../../model/UserProfile';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.css']
})
export class AppHeaderComponent implements OnInit {

  @Input() userProfile: UserProfile | undefined;
  @Output() userProfileChange = new EventEmitter<UserProfile>();
  //@Output() showHideModalWindow: EventEmitter<ModalWindowOptions> = new EventEmitter();

  ngOnInit(): void {
  }

  /**
  modalWindowControl(event: ModalWindowOptions) {
    console.log(this.userProfile);
    console.log("app header component "+event);
    this.showHideModalWindow.emit(event);
  }
  **/

}

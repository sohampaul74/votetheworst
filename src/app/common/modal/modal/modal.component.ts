import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ModalWindowOptions } from '../../model/ModalWindowOptions';
import {ModalWindowType} from '../../model/ModalWindowType';
declare var $:any;
@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  @Input() modalWindowOptions: ModalWindowOptions | undefined;
  @Output() showHideModalWindow: EventEmitter<ModalWindowOptions> = new EventEmitter();
  ModalWindowType = ModalWindowType;


  ngOnInit(): void {
    console.log("modal component: "+this.modalWindowOptions?.isWindowOpen);
  }
  closeThis(): void {
    if(this.modalWindowOptions) {
      this.modalWindowOptions.isWindowOpen = false;
    }
    this.showHideModalWindow.emit(this.modalWindowOptions);
  }
  showForgotPassword(args: any) : void {
    if(this.modalWindowOptions) {
      this.modalWindowOptions.isWindowOpen = true;
      this.modalWindowOptions.windowType = "forgot" as ModalWindowType;
    }
    this.showHideModalWindow.emit(this.modalWindowOptions);
  }
}

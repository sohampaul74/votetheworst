import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { ModalWindowOptions } from '../../model/ModalWindowOptions';
import { ModalWindowType } from '../../model/ModalWindowType';
declare var $ : any;

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.css']
})
export class EntryComponent implements OnInit {

  @Input() modalWindowOptions: ModalWindowOptions | undefined;
  @Output() showHideModal: EventEmitter<ModalWindowOptions> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  toggleComponent(type: string): void {
    console.log("in entry component "+this.modalWindowOptions?.isWindowOpen);
    if(this.modalWindowOptions) {
      this.modalWindowOptions.isWindowOpen = !this.modalWindowOptions.isWindowOpen;
      this.modalWindowOptions.windowType = type as ModalWindowType;
    }
    this.showHideModal.emit(this.modalWindowOptions);
  }

}

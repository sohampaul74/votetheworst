import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ModalWindowOptions } from '../../model/ModalWindowOptions';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.css']
})
export class AppHeaderComponent implements OnInit {

  @Input() modalWindowOptions: ModalWindowOptions | undefined;
  @Output() showHideModalWindow: EventEmitter<ModalWindowOptions> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  modalWindowControl(event: ModalWindowOptions) {
    console.log("app header component "+event);
    this.showHideModalWindow.emit(event);
  }

}

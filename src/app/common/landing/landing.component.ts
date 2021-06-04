import { ThrowStmt } from '@angular/compiler';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ModalWindowOptions } from '../model/ModalWindowOptions';
import { ModalWindowType } from '../model/ModalWindowType';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  @Input() modalWindowOptions: ModalWindowOptions | undefined;
  @Output() toggleModalWindow:EventEmitter<ModalWindowOptions> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  toggleRegister() : void {
    if(this.modalWindowOptions) { 
      this.modalWindowOptions.windowType = "register" as ModalWindowType;
      this.modalWindowOptions.isWindowOpen = true;
    }
    this.toggleModalWindow.emit(this.modalWindowOptions);
  }
}

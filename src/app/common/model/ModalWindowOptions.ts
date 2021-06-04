import { ModalWindowType } from "./ModalWindowType";

export class ModalWindowOptions {

    isWindowOpen : boolean = false;
    windowId : string = "int-modal-window";
    windowType: ModalWindowType = "register" as ModalWindowType;
}


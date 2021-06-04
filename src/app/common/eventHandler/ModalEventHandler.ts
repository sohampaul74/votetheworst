import { ModalWindowOptions } from "../model/ModalWindowOptions";

export interface ModalEventHandler<T extends ModalWindowOptions> {
    modalEventOption : T;
    showModalWindow() : void;
    hideModalWindow() : void;

}
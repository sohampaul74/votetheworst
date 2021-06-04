import { Component, Inject } from '@angular/core';
import { AuthModel } from './common/model/AuthModel';
import { AuthToken } from './common/model/AuthToken';
import { ModalWindowOptions } from './common/model/ModalWindowOptions';
import { AuthService } from './common/service/auth.service.interface';
import { AuthServiceImpl } from './common/service/impl/auth.service';
import { AUTH_SERVICE } from './common/service/impl/auth.service.token';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [
    {provide: AUTH_SERVICE, useClass:AuthServiceImpl}
  ]
})
export class AppComponent {
  title: String = 'vote-the-worst';
  modalWindowOptions: ModalWindowOptions = new ModalWindowOptions();

  constructor(@Inject(AUTH_SERVICE) private authService: AuthService<AuthModel,AuthToken>) {}

  toggleModalWindow(event: ModalWindowOptions) {
    console.log("app component toggleModalWindow called with ");
    console.log(event);
    this.modalWindowOptions = this.modalWindowOptions;
    console.log(this.authService);
  }

}

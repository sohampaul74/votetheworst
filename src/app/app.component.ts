import { Component, Inject, OnInit } from '@angular/core';
import { AuthModel } from './common/model/AuthModel';
import { AuthToken } from './common/model/AuthToken';
import { ModalWindowOptions } from './common/model/ModalWindowOptions';
import { UserProfile } from './common/model/UserProfile';
import { AuthService } from './common/service/auth.service.interface';
import { AuthServiceImpl } from './common/service/impl/auth.service.impl';
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
  userProfile : UserProfile;

  constructor(@Inject(AUTH_SERVICE) private authService: AuthService<AuthModel,AuthToken>) {
    this.userProfile = new UserProfile();
    console.log(this.userProfile);
  }

  toggleModalWindow(event: ModalWindowOptions) {
    this.userProfile.modalWindowOption = event;
    console.log("app component toggleModalWindow called");
    console.log(event);
  }

}

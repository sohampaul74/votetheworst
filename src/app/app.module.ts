import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppHeaderComponent } from './common/header/app-header/app-header.component';
import { EntryComponent } from './common/header/entry/entry.component';
import { LandingComponent } from './common/landing/landing.component';
import { ModalComponent } from './common/modal/modal/modal.component';
import { LoginnComponent } from './common/form/loginn/loginn.component';
import { RegisterComponent } from './common/form/register/register.component';
import { ForgotpassComponent } from './common/form/forgotpass/forgotpass.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProfileComponent } from './common/header/profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    EntryComponent,
    LandingComponent,
    ModalComponent,
    LoginnComponent,
    RegisterComponent,
    ForgotpassComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

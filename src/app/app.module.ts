import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppHeaderComponent } from './common/header/app-header/app-header.component';
import { EntryComponent } from './common/header/entry/entry.component';
import { LandingComponent } from './common/landing/landing.component';

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    EntryComponent,
    LandingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

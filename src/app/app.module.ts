import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './container/app.component';
import {CoreModule} from "./core/core.module";
import {MessagesModule} from "primeng/messages";
import {MessageService} from "primeng/api";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {HTTP_INTERCEPTORS, provideHttpClient, withInterceptors} from "@angular/common/http";
import {AuthService} from "./shared/services/auth.service";
import {jwtInterceptor} from "./shared/interceptors/jwt.interceptor";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    BrowserAnimationsModule,
  ],
  providers: [
    MessageService,
    provideHttpClient(
      withInterceptors([
        jwtInterceptor
      ])
    ),
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

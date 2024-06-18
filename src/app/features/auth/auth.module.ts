import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import {AuthRoutingModule} from "./auth-routing.module";
import {Button, ButtonDirective} from "primeng/button";
import {InputTextModule} from "primeng/inputtext";
import {PasswordModule} from "primeng/password";
import {ReactiveFormsModule} from "@angular/forms";
import {AuthService} from "../../shared/services/auth.service";
import {CookieService} from "ngx-cookie-service";

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    Button,
    InputTextModule,
    PasswordModule,
    ButtonDirective
  ],
  providers: [
    CookieService,
  ],
})
export class AuthModule { }

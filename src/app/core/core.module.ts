import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AuthModule} from "../features/auth/auth.module";
import { CoreComponent } from './container/core.component';
import { HeaderComponent } from './layout/header/header.component';
import {MenubarModule} from "primeng/menubar";
import {CoreRoutingModule} from "./core-routing.module";
import { HomeComponent } from './layout/home/home.component';
import {ToastModule} from "primeng/toast";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ButtonDirective} from "primeng/button";
import { FooterComponent } from './layout/footer/footer.component';



@NgModule({
  declarations: [
    CoreComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    MenubarModule,
    CoreRoutingModule,
    AuthModule,
    ToastModule,
    ButtonDirective
  ]
})
export class CoreModule { }

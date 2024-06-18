import {ErrorHandler, NgModule} from '@angular/core';
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
import {TranslateModule} from "@ngx-translate/core";
import {DropdownModule} from "primeng/dropdown";
import {FormsModule} from "@angular/forms";
import {GlobalErrorHandler} from "../handlers/global-error.handler";



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
    ButtonDirective,
    TranslateModule,
    DropdownModule,
    FormsModule
  ],
  providers: [
    //     {
    //   provide: ErrorHandler,
    //   useClass: GlobalErrorHandler
    // }
  ]
})
export class CoreModule { }

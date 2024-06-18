import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ExoRoutingModule} from "./exo-routing.module";
import { PixelsComponent } from './components/pixels/pixels.component';
import { ExoComponent } from './container/exo.component';
import {MenubarModule} from "primeng/menubar";
import {ButtonDirective} from "primeng/button";



@NgModule({
  declarations: [
    PixelsComponent,
    ExoComponent
  ],
  imports: [
    CommonModule,
    ExoRoutingModule,
    MenubarModule,
    ButtonDirective
  ]
})
export class ExoModule { }

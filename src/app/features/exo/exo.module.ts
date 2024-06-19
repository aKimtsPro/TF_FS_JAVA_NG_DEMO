import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ExoRoutingModule} from "./exo-routing.module";
import { PixelsComponent } from './components/pixels/pixels.component';
import { ExoComponent } from './container/exo.component';
import {MenubarModule} from "primeng/menubar";
import {ButtonDirective} from "primeng/button";
import {TeamComponent} from "./components/team/team.component";
import {TeamService} from "./services/team.service";
import { TeamListPlayersComponent } from './components/team/team-list-players/team-list-players.component';
import { TeamAddPlayerComponent } from './components/team/team-add-player/team-add-player.component';
import {TableModule} from "primeng/table";
import {TranslateModule} from "@ngx-translate/core";
import {FloatLabelModule} from "primeng/floatlabel";
import {ChipsModule} from "primeng/chips";
import {ReactiveFormsModule} from "@angular/forms";
import {StoreModule} from "@ngrx/store";
import {FEATURE_TEAM} from "./store/team/team.state";
import {teamReducer} from "./store/team/team.reducer";



@NgModule({
  declarations: [
    PixelsComponent,
    ExoComponent,
    TeamComponent,
    TeamListPlayersComponent,
    TeamAddPlayerComponent
  ],
  imports: [
    CommonModule,
    ExoRoutingModule,
    MenubarModule,
    ButtonDirective,
    TableModule,
    TranslateModule,
    FloatLabelModule,
    ChipsModule,
    ReactiveFormsModule,
    StoreModule.forFeature(FEATURE_TEAM, teamReducer)
  ],
  providers: [
    TeamService
  ]
})
export class ExoModule { }

import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {HomeComponent} from "../../core/layout/home/home.component";
import {ExoComponent} from "./container/exo.component";
import {PixelsComponent} from "./components/pixels/pixels.component";
import {TeamComponent} from "./components/team/team.component";

const routes: Routes = [
  {
    path: '',
    component: ExoComponent,
    children: [
      {
        path: 'pixels',
        component: PixelsComponent
      },
      {
        path: 'team',
        component: TeamComponent
      }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExoRoutingModule {

}

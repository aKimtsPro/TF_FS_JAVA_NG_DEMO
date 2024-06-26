import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppComponent} from "./container/app.component";

const routes: Routes = [{
  path: '',
  component: AppComponent,
  children: [
    {
      path: '',
      loadChildren: () => import('./core/core.module').then(m => m.CoreModule)
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

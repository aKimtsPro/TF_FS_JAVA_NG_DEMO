import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {LoginComponent} from "./components/login/login.component";
import {authGuard} from "../../shared/guards/auth.guard";

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [authGuard(false)]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule{
}

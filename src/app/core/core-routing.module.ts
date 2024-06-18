import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {CoreComponent} from "./container/core.component";
import {HomeComponent} from "./layout/home/home.component";
import {authGuard} from "../shared/guards/auth.guard";

const routes: Routes = [
  {
    path: '',
    component: CoreComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent,
      },
      {
        path: 'auth',
        loadChildren: () => import('../features/auth/auth.module').then(m => m.AuthModule),
      },
      {
        path: 'posts',
        loadChildren: () => import('../features/posts/posts.module').then(m => m.PostsModule),
        canActivate: [authGuard(true)]
      }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule {}

import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {HomeComponent} from "../../core/layout/home/home.component";
import {PostsListComponent} from "./components/posts-list/posts-list.component";
import {PostsDetailComponent} from "./components/posts-detail/posts-detail.component";
import {postResolverFn} from "./resolvers/post.resolver";


const routes: Routes = [
  {
    path: '',
    component: PostsListComponent
  },
  {
    path: ':id',
    component: PostsDetailComponent,
    resolve: [
      postResolverFn,
      // postResolverFn2,
    ]
  },
  {
    path: 'create',
    component: HomeComponent // TODO remove
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostsRoutingModule {

}

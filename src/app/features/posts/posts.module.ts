import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PostsRoutingModule} from "./posts-routing.module";
import { PostsListComponent } from './components/posts-list/posts-list.component';
import {TableModule} from "primeng/table";
import {PostsService} from "./services/posts.service";
import {ButtonDirective} from "primeng/button";
import { PostsDetailComponent } from './components/posts-detail/posts-detail.component';
import {ProgressSpinnerModule} from "primeng/progressspinner";



@NgModule({
  declarations: [
    PostsListComponent,
    PostsDetailComponent
  ],
  imports: [
    CommonModule,
    PostsRoutingModule,
    TableModule,
    ButtonDirective,
    ProgressSpinnerModule
  ],
  providers: [
    PostsService,
  ]
})
export class PostsModule { }

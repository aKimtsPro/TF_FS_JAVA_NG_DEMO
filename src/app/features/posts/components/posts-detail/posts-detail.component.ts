import { Component } from '@angular/core';
import {first, map, Observable, tap} from "rxjs";
import {IPost} from "../../models/post.model";
import {PostsService} from "../../services/posts.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-posts-detail',
  templateUrl: './posts-detail.component.html',
  styleUrl: './posts-detail.component.scss'
})
export class PostsDetailComponent {

  post$: Observable<IPost>;

  constructor(
    private readonly _route: ActivatedRoute,
  ) {
    console.log('instanciation of PostsDetailComponent');
    this.post$ = _route.data.pipe(
      map( resolveList => resolveList[0] )
    )
  }

}

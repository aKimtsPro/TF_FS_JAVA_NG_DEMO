import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../env/env";
import {Observable} from "rxjs";
import {IPost} from "../models/post.model";
import {AuthService} from "../../../shared/services/auth.service";

@Injectable()
export class PostsService {

  constructor(
    private readonly _client: HttpClient,
    private readonly _auth: AuthService,
  ) { }

  getPosts(): Observable<IPost[]> {
    return this._client.get<IPost[]>(environment.baseUrl+'posts')
  }

  createPost() {

  }

  getPostById(id: number) {
    return this._client.get<IPost>(environment.baseUrl+'posts/'+id)
  }
}

import {Component, computed, effect, inject, Signal, signal} from '@angular/core';
import {delay, Observable} from "rxjs";
import {IPost} from "../../models/post.model";
import {PostsService} from "../../services/posts.service";
import {CookieService} from "ngx-cookie-service";
import {toSignal} from "@angular/core/rxjs-interop";

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrl: './posts-list.component.scss'
})
export class PostsListComponent {

  private readonly $cookies = inject( CookieService)
  private readonly $posts = inject(PostsService)

  posts: Signal<IPost[] | undefined> = toSignal( this.$posts.getPosts().pipe(delay(2000)) )
  favori= signal<IPost | null>(null)
  addExclamation = signal<boolean>(false)

  titreFavori = computed(() => {
    const favori = this.favori()
    const exclamation = this.addExclamation() ? '!!!' : ''

    return favori && favori.title + exclamation || null
  })

  loading = computed(() => {
    const posts = this.posts()
    return !posts
  })

  changeFavEffect = effect(() => {
    const favori = this.favori()
    this.$cookies.set('fav', JSON.stringify(favori))
  })

  changeFavori(post: IPost){
    this.favori.set(post)
  }



}

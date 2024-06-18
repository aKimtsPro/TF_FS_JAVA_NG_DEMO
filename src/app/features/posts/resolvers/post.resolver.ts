import {ResolveFn} from "@angular/router";
import {IPost} from "../models/post.model";
import {inject} from "@angular/core";
import {PostsService} from "../services/posts.service";

export const postResolverFn: ResolveFn<IPost> = (route, state) => {
  console.log('resolving post')

  const posts = inject(PostsService)
  const id = route.params['id']

  return posts.getPostById(id)
}

// export const postResolverFn2: ResolveFn<IPost> = (route, state) => {
//
//   const posts = inject(PostsService)
//   const id = route.params['id']
//
//   return posts.getPostById(id).pipe(
//     map(post => ({...post, message: 'mon message custom'} as IPost))
//   )
// }

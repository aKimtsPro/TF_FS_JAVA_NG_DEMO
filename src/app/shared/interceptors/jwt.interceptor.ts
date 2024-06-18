import {HttpErrorResponse, HttpHeaders, HttpInterceptorFn} from "@angular/common/http";
import {inject} from "@angular/core";
import {AuthService} from "../services/auth.service";
import {catchError, tap, throwError} from "rxjs";
import {GenericError} from "../../handlers/errors/generic.error";


export const jwtInterceptor: HttpInterceptorFn = (req, next)  => {
  const auth = inject(AuthService)
  const token = auth.token;

  if( token ){
    req = req.clone({
        headers: new HttpHeaders({
          Authorization: `Bearer ${token}`
        })
      })
  }

  return next(req).pipe(
    tap(resp => console.log(resp)),
    catchError(
      err => {
        throw 'elo'
      }
    )
  )
}

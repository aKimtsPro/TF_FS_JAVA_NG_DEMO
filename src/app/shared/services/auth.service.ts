import { Injectable } from '@angular/core';
import {BehaviorSubject, map, Observable, tap} from "rxjs";
import {IAuth} from "../../features/auth/models/auth.model";
import {CookieService} from "ngx-cookie-service";
import {ILoginForm} from "../../features/auth/form/login.form";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../env/env";


@Injectable()
export class AuthService {

  private _currentUser$ = new BehaviorSubject<IAuth | null>(null);

  set currentUser(value: IAuth | null) {
    if( value ){
      console.log("init cookies")
      this._cookie.set("user", btoa(JSON.stringify(value)) );
      console.log("cookies set : ", this._cookie.get("user"))
    }
    else {
      this._cookie.delete("user")
    }

    this._currentUser$.next(value)
  }
  get currentUser() : IAuth | null {
    return this._currentUser$.value
  }

  get isConnected$(): Observable<boolean> {
    return this.currentUser$.pipe(
      map( auth => !!auth )
    )
  }

  get token(): string | null {
    return this.currentUser ? this.currentUser.accessToken : null
    // return (this.currentUser && this.currentUser.accessToken) || null
  }

  constructor(
    private readonly _cookie: CookieService,
    private readonly _client: HttpClient,
  ) {
    this.loadUser()
  }

  // - se connecter
  login(form: ILoginForm) {
    return this._client.post<IAuth>(environment.baseUrl + "login", form).pipe(
      tap(auth => this.currentUser = auth)
    )
  }

  // - se deconnecter
  logout() {
    this.currentUser = null;
  }

  // - s'enregistrer


  // - recupérer l'user connecté
  get currentUser$() : Observable<IAuth | null> {
    return this._currentUser$.asObservable()
  }

  loadUser(){
    const userCookie = this._cookie.get("user");
    if( userCookie ){
      this.currentUser = JSON.parse( atob(userCookie) )
    }
  }

}

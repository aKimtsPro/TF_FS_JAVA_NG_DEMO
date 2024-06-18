import { Component } from '@angular/core';
import {IAuth} from "../../../features/auth/models/auth.model";
import {Observable} from "rxjs";
import {AuthService} from "../../../shared/services/auth.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  currentUser$: Observable<IAuth | null>;

  constructor(
    private readonly _auth: AuthService
  ) {
    this.currentUser$ = _auth.currentUser$
  }

}

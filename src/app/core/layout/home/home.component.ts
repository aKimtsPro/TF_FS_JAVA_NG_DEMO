import { Component } from '@angular/core';
import {IAuth} from "../../../features/auth/models/auth.model";
import {Observable} from "rxjs";
import {AuthService} from "../../../shared/services/auth.service";
import {MessageService} from "primeng/api";
import {GenericError} from "../../../handlers/errors/generic.error";
import {ResourceNotFoundError} from "../../../handlers/errors/resource-not-found.error";
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  currentUser$: Observable<IAuth | null>;

  constructor(
    _auth: AuthService,
    private readonly $router: Router
  ) {
    this.currentUser$ = _auth.currentUser$
  }

  throwException() {
    // throw new ResourceNotFoundError()
    this.$router.navigate(['posts', 101])
  }
}

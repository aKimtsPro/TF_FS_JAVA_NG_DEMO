import { Component } from '@angular/core';
import {MenuItem} from "primeng/api";
import {AuthService} from "../../../shared/services/auth.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  menuItems: MenuItem[] = [
    {
      label: 'home',
      routerLink: '/home'
    },
    {
      label: 'auth',
      items: [
        {
          label: 'login',
          routerLink: '/auth/login'
        },
        {
          label: 'mon profil',
          routerLink: '/auth/profile'
        }
      ]
    },
    {
      label: 'posts',
      items: [
        {
          label: 'list',
          routerLink: '/posts'
        },
        {
          label: 'create',
          routerLink: '/posts/create'
        }
      ]
    }
  ]
  isConnected$: Observable<boolean>

  constructor(
    private readonly _auth: AuthService
  ) {
    this.isConnected$ = _auth.isConnected$;
  }

  handleLogout(): void {
    this._auth.logout()
  }

}

import {Component, computed, inject} from '@angular/core';
import {MenuItem} from "primeng/api";
import {AuthService} from "../../../shared/services/auth.service";
import {Observable} from "rxjs";
import {toSignal} from "@angular/core/rxjs-interop";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  private readonly $auth = inject(AuthService)

  isConnected = toSignal(this.$auth.isConnected$)

  menuItems = computed(() => {
    const isConnected = this.isConnected();
    return [
      {
        label: 'home',
        routerLink: '/home'
      },
      {
        label: 'auth',
        items: [
          {
            label: 'login',
            routerLink: '/auth/login',
            visible: !isConnected
          },
          {
            label: 'mon profil',
            routerLink: '/auth/profile',
            visible: isConnected
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
        ],
        visible: isConnected
      },
      {
        label: 'exo',
        items: [
          {
            label: 'pixels',
            routerLink: '/exo/pixels'
          }
        ]
      }
    ]
  })

  handleLogout(): void {
    this.$auth.logout()
  }

}

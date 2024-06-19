import {Component, computed, effect, inject, signal} from '@angular/core';
import {MenuItem} from "primeng/api";
import {AuthService} from "../../../shared/services/auth.service";
import {Observable} from "rxjs";
import {toSignal} from "@angular/core/rxjs-interop";
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  private readonly $auth = inject(AuthService)
  private readonly $translate = inject(TranslateService)

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
          },
          {
            label: 'team',
            routerLink: '/exo/team'
          },
          {
            label: 'tasks',
            routerLink: '/exo/tasks'
          }
        ]
      },
    ]
  })

  selectedOption = signal<'fr' | 'en'>('fr')

  dropdownOptions = [
    'en',
    'fr'
  ]

  selectEffect = effect(() => {
    const selected = this.selectedOption()
    console.log(selected)
    this.$translate.use(selected)
  })

  handleLogout(): void {
    this.$auth.logout()
  }

}

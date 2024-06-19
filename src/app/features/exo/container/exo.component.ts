import { Component } from '@angular/core';
import {MenuItem} from "primeng/api";

@Component({
  selector: 'app-exo',
  templateUrl: './exo.component.html',
  styleUrl: './exo.component.scss'
})
export class ExoComponent {

  menu: MenuItem[] = [
    {
      label: 'pixels',
      routerLink: './pixels'
    },
    {
      label: 'team',
      routerLink: './team'
    }
  ]

}

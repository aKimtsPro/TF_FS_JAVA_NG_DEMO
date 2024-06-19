import { Component } from '@angular/core';
import {TeamService} from "../../services/team.service";

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrl: './team.component.scss'
})
export class TeamComponent {

  constructor(
    private readonly $team: TeamService,
  ) {}

}

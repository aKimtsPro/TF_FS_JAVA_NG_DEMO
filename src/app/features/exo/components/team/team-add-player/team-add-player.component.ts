import { Component } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {TeamService} from "../../../services/team.service";
import {ADD_PLAYER_FORM} from "../../../form/add-player.form";

@Component({
  selector: 'app-team-add-player',
  templateUrl: './team-add-player.component.html',
  styleUrl: './team-add-player.component.scss'
})
export class TeamAddPlayerComponent {

  form: FormGroup;

  constructor(
    private readonly teamService: TeamService,
    formBuilder: FormBuilder,
  ) {
    this.form = formBuilder.group(ADD_PLAYER_FORM)
  }

  handleAddPlayer() {
    if( this.form.invalid )
      throw "qqchose" // TODO change

    this.teamService.addPlayer(this.form.value)
    this.form.reset()
  }

}

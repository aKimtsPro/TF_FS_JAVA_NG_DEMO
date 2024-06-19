import {Component, inject} from '@angular/core';
import {IPlayer} from "../../../models/team.model";
import {TeamService} from "../../../services/team.service";
import {toSignal} from "@angular/core/rxjs-interop";

@Component({
  selector: 'app-team-list-players',
  templateUrl: './team-list-players.component.html',
  styleUrl: './team-list-players.component.scss'
})
export class TeamListPlayersComponent {

  private readonly teamService = inject(TeamService);
  players = toSignal(this.teamService.players$, {initialValue: [] as IPlayer[]})

  handleDeletePlayer(id: number) {
    this.teamService.removePlayer(id)
  }

  isLeader(id: number) {
    return this.teamService.leader?.id == id
  }

  handleSetLeader(id: number) {
    this.teamService.setLeader(id)
  }
}

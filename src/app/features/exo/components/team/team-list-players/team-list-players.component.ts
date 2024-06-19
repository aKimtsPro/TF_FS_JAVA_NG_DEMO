import {Component, inject} from '@angular/core';
import {IPlayer} from "../../../models/team.model";
import {TeamService} from "../../../services/team.service";
import {toSignal} from "@angular/core/rxjs-interop";
import {Store} from "@ngrx/store";
import {selectTeamPlayers} from "../../../store/team/team.selector";

@Component({
  selector: 'app-team-list-players',
  templateUrl: './team-list-players.component.html',
  styleUrl: './team-list-players.component.scss'
})
export class TeamListPlayersComponent {

  private readonly $team = inject(TeamService);
  private readonly $store = inject(Store);

  players = this.$store.selectSignal(selectTeamPlayers)

  handleDeletePlayer(id: number) {
    this.$team.removePlayer(id)
  }

  isLeader(id: number) {
    return this.$team.leader?.id == id
  }

  handleSetLeader(id: number) {
    this.$team.setLeader(id)
  }
}

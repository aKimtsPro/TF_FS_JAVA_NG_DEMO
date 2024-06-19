import {Component, inject} from '@angular/core';
import {TeamService} from "../../../services/team.service";
import {Store} from "@ngrx/store";
import {selectTeamIsLeader, selectTeamPlayers} from "../../../store/team/team.selector";

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
    return this.$store.select(selectTeamIsLeader(id))
  }

  handleSetLeader(id: number) {
    this.$team.setLeader(id)
  }
}

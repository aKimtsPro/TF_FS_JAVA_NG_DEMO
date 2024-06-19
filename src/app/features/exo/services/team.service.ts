import { Injectable } from '@angular/core';
import {IPlayer} from "../models/team.model";
import { combineLatest, first } from "rxjs";
import {PlayerNotFoundError} from "../errors/player-not-found.error";
import {LeaderDeleteError} from "../errors/leader-delete.error";
import {GenericError} from "../../../handlers/errors/generic.error";
import {TeamFullError} from "../errors/team-full.error";
import {Store} from "@ngrx/store";
import {TeamActions} from "../store/team/team.action";
import {
  selectTeam,
  selectTeamLeader,
  selectTeamPlayer, selectTeamPlayers,
} from "../store/team/team.selector";

@Injectable()
export class TeamService {

  private _nextId = 1;

  constructor(
    private readonly $store: Store
  ) { }

  addPlayer(player: IPlayer) {
    this.$store.select(selectTeamPlayers).pipe(
      first()
    ).subscribe(players => {
      if( players.includes(player) )
        throw new GenericError('player-exists', 'error')

      if( players.length == 5 )
        throw new TeamFullError();

      player.id = this._nextId++;

      this.$store.dispatch( TeamActions.addPlayer({ player }) )
    })
  }

  removePlayer(id: number) {
    combineLatest([
      this.$store.select(selectTeamPlayer(id)).pipe(first()),
      this.$store.select(selectTeamLeader).pipe(first()),
    ]).subscribe(([player, leader]) => {
      if( !player )
        throw new PlayerNotFoundError()

      if( player === leader )
        throw new LeaderDeleteError();

      this.$store.dispatch( TeamActions.removePlayer({playerId: player.id!}) )
    })
  }

  setLeader(id: number){
    combineLatest([
      this.$store.select(selectTeamPlayer(id)).pipe(first()),
      this.$store.select(selectTeamLeader).pipe(first()),
    ]).subscribe(
      ([nextLeader, leader]) => {
        if( !nextLeader )
          throw new PlayerNotFoundError();

        if( nextLeader === leader )
          throw new GenericError('already-leader', 'error');

        this.$store.dispatch( TeamActions.setLeader({nextLeader}) )
      }
    )
  }
}

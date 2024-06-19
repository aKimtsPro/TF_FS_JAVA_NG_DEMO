import { Injectable } from '@angular/core';
import {IPlayer, ITeam} from "../models/team.model";
import {BehaviorSubject, map} from "rxjs";
import {PlayerNotFoundError} from "../errors/player-not-found.error";
import {LeaderDeleteError} from "../errors/leader-delete.error";
import {GenericError} from "../../../handlers/errors/generic.error";
import {TeamFullError} from "../errors/team-full.error";

@Injectable()
export class TeamService {

  private _nextId = 1;


  private readonly _team$ = new BehaviorSubject<ITeam>({
    players: [],
    leader: null
  });

  constructor() { }

  addPlayer(player: IPlayer) {
    if( this.team.players.includes(player) )
      throw new GenericError('player-exists', 'error')

    if( this.team.players.length == 5 )
      throw new TeamFullError();

    player.id = this._nextId++;
    this.team.players.push(player);

    this._team$.next( this.team )
  }

  removePlayer(id: number) {
    const toRemoveIndex = this.team.players.findIndex(
      player => player.id == id
    )

    if( toRemoveIndex === -1 )
      throw new PlayerNotFoundError();

    const toRemove = this.team.players[toRemoveIndex]
    if( toRemove === this.team.leader )
      throw new LeaderDeleteError();

    this.team.players.splice(toRemoveIndex, 1)
    this._team$.next( this.team )
  }

  setLeader(id: number){
    const nextLeader = this.team.players.find(
      player => player.id == id
    )

    if( !nextLeader )
      throw new PlayerNotFoundError();

    if( nextLeader === this.team.leader )
      throw new GenericError('already-leader', 'error');

    this.team.leader = nextLeader
    this._team$.next( this.team )
  }

  get team() {
    return this._team$.value
  }

  get leader() {
    return this.team.leader;
  }

  get players() {
    return [...this.team.players];
  }

  get team$() {
    return this._team$.asObservable()
  }

  get leader$() {
    return this._team$.pipe(
      map(t => t.leader)
    )
  }

  get players$() {
    return this._team$.pipe(
      map(t => t.players),
    )
  }

}

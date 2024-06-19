import {createFeatureSelector, createSelector} from "@ngrx/store";
import {FEATURE_TEAM, ITeamState} from "./team.state";
import {memoize} from "@angular/cli/src/utilities/memoize";

const feature = createFeatureSelector<ITeamState>(FEATURE_TEAM);

export const selectTeam = createSelector(
  feature,
  (team) => team
);

export const selectTeamPlayers = createSelector(
  feature,
  (team) => team.players
)

export const selectTeamLeader = createSelector(
  feature,
  (team) => team.leader
)

export const selectTeamSize = createSelector(
  selectTeamPlayers,
  (players) => players.length
)

export const selectTeamPlayer = (id:number) => createSelector(
  selectTeamPlayers,
  (players) => players.find(player => player.id === id)
)

export const selectTeamPlayerAndLeader = (id:number) => createSelector({
  player: selectTeamPlayer(id),
  leader: selectTeamLeader
})

export const selectTeamIsLeader = (id: number) => createSelector(
  selectTeamPlayer(id),
  selectTeamLeader,
  (player, leader) => player == leader
)

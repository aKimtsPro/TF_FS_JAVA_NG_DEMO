import {createFeatureSelector, createSelector} from "@ngrx/store";
import {FEATURE_TEAM, ITeamState} from "./team.state";

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

import {createActionGroup, props} from "@ngrx/store";
import {IPlayer} from "./team.state";

export const TeamActions = createActionGroup({
  source: 'Team',
  events: {
    'addPlayer': props<{ player: IPlayer }>(),
    'removePlayer': props<{ playerId: number }>(),
    'setLeader': props<{ nextLeader: IPlayer | null }>()
  }
})

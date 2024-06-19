import {createReducer, on} from "@ngrx/store";
import {initialState} from "./team.state";
import {TeamActions} from "./team.action";
import {state} from "@angular/animations";


export const teamReducer = createReducer(
  initialState,
  on( TeamActions.addPlayer, (state, {player}) => ({
      ...state,
      players: [...state.players, player]
    })
  ),
  on( TeamActions.removePlayer, (state,  {playerId}) => ({
      ...state,
      players: state.players.filter(p => p.id !== playerId)
    })
  ),
  on( TeamActions.setLeader, (state, {nextLeader}) => ({
      ...state,
      leader: nextLeader
    })
  )
);

export interface IPlayer {
  id?: number,
  firstname: string,
  lastname: string,
}

export interface ITeamState {
  players: IPlayer[],
  leader: IPlayer | null
}

export const initialState: ITeamState = {
  players: [],
  leader: null
}

export const FEATURE_TEAM = "team"

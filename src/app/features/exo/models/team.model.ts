export interface IPlayer {
  id?: number,
  firstname: string,
  lastname: string,
}

export interface ITeam {
  players: IPlayer[],
  leader: IPlayer | null
}

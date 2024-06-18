export interface IAuth {
  accessToken: string,
  user: IUser
}

export interface IUser {
  id: number,
  username: string,
  email: string,
}

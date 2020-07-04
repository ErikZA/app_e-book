export enum UsersTypes {
  LOAD_REQUEST = '@users/LOAD_REQUEST',
  LOAD_SUCCESS = '@users/LOAD_SUCCESS',
  LOAD_FAILURE = '@users/LOAD_FAILURE',
  NEW_USER = '@users/NEW_USER',
  ASYNC_NEW_USER = '@users/ASYNC_NEW_USER'
}

export interface User {
  id?: number
  name: string
  lastName: string
  email: string
  password: string
}

export interface UsersState {
  readonly data: User[]
  readonly loading: boolean
  readonly error: boolean
}

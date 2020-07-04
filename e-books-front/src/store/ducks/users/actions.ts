import { action } from "typesafe-actions";
import { UsersTypes, User } from "./types";

export const loadRequest = () => action(UsersTypes.LOAD_REQUEST);

export const loadSuccess = (data: User[]) =>
  action(UsersTypes.LOAD_SUCCESS, { data });

export const loadFailure = () => action(UsersTypes.LOAD_FAILURE);

export const newUser = (data: User) => action(UsersTypes.NEW_USER, { data });

export const asyncNewUser = (data: User) =>
  action(UsersTypes.ASYNC_NEW_USER, { data });

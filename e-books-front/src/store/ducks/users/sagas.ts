import { call, put } from "redux-saga/effects";
import api from "../../../services/api";

import { loadSuccess, loadFailure, newUser } from "./actions";
import { AnyAction } from "redux";

interface Response {
  data: any;
}

export function* load() {
  try {
    const response = yield call(api.get, "/users");

    yield put(loadSuccess(response.data));
  } catch (err) {
    yield put(loadFailure());
  }
}

export function* createUser(data: AnyAction) {
  try {
    const response: Response = yield call(
      api.post,
      "/users",
      data.payload.data
    ); // yield define um ponto de parada
    yield put(newUser(response.data));
  } catch (err) {
    yield put(loadFailure());
  }
}

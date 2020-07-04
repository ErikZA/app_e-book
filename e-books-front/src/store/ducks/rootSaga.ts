import { all, takeLatest } from 'redux-saga/effects';

import { UsersTypes } from './users/types';
import { load, createUser } from './users/sagas';

export default function* rootSaga() {
  return yield all([
    takeLatest(UsersTypes.LOAD_REQUEST, load),
    takeLatest(UsersTypes.ASYNC_NEW_USER, createUser),
  ]);
}

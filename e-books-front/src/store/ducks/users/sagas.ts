import { User } from './types';
import { call, put } from 'redux-saga/effects';
import api from '../../../services/api';

import { loadSuccess, loadFailure, newUser } from './actions';
import { AnyAction } from 'redux';

export function* load() {
  try {
    const response = yield call(api.get, '/users');

    yield put(loadSuccess(response.data));
  } catch (err) {
    yield put(loadFailure());
  }
}

export function* createUser(data: AnyAction) {// genaretor
  console.log(data)
  try {
    //const response = yield call(api.post, '/users', data);// yield define um ponto de parada

    yield put(newUser(data.payload.data));
  } catch (err) {
    yield put(loadFailure());
  }
}
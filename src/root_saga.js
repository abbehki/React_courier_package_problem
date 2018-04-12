import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import {fetchUser} from './App/poster/poster_saga';

export default function* saga() {
    yield takeEvery("USER_FETCH_REQUESTED", fetchUser);
  }
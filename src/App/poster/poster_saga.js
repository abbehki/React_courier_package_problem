import Api from '../../Api_Url';
import {axiosGet} from '../../axios';
import { call, put} from 'redux-saga/effects';

function* fetchUser(action) {
    try {
       const data_fetched = yield call(axiosGet,Api.fetchdata+action.data);
        yield put({type: "DATA", data: data_fetched});
    } catch (e) {
      yield put({type: "ERROR", message: e.message});
    }
 }
 
 export {
     fetchUser,
 };
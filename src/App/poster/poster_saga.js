import Api from '../../Api_Url';
import {axiosGet} from '../../axios';
import { call, put} from 'redux-saga/effects';
import {responseData} from './responseData';
import ACTION from '../../actionConstant';

function* fetchUser(action) {
    try {
      // const data_fetched = yield call(axiosGet,Api.fetchdata+action.data);
        yield put({type: ACTION.CHECK.LOAD_DATA, data: responseData});
    } catch (e) {
      yield put({type: "ERROR", message: e.message});
    }
 }
 
 export {
     fetchUser,
 };
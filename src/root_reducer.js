import { combineReducers } from 'redux';
import poster from './App/poster/poster_reducer';

const rootReducer=combineReducers({
    poster,
});
export default rootReducer;
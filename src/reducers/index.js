import { combineReducers } from 'redux-immutable';
import auth from './auth';

const rootReducer = combineReducers({
	auth,
});

export default rootReducer;
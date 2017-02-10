import { handleActions } from 'redux-actions';
import { authState } from '../constants/models';

import {
	LOGIN,
	LOGOUT,
} from '../constants/actionTypes';

const authReducer = handleActions({
	'LOGIN': (state, { payload }) => (
		state.merge(payload)
	),
	'LOGOUT': (state) => (
		state.merge({
			token: '',
			accountLevel: -1,
			itemPermission: '',
		})
	),
	'CHECKTOKEN': (state, { payload }) => (
		state.set('accountLevel', -2)
	),
	'RELOGIN': (state) => (
		state.set('accountLevel', -1)
	)
}, authState);

export default authReducer;
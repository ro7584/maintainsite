import { createAction } from 'redux-actions';
import {
	LOGIN,
	LOGOUT,
	CHECKTOKEN,
	RELOGIN,
} from '../constants/actionTypes';

export const login = createAction(LOGIN);
export const logout = createAction(LOGOUT);
export const checkToken = createAction(CHECKTOKEN);
export const reLogin = createAction(RELOGIN);
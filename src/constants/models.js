import Immutable from 'immutable';

export const authState = Immutable.fromJS({
	'token': null,
	'accountLevel': -1,
	'itemPermission': '',
});
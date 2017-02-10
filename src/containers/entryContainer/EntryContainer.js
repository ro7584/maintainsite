import { connect } from 'react-redux';
import Entry from '../../Components/Entry';
import { reLogin, checkToken } from '../../actions/authAction';
import { hashHistory } from 'react-router';


export default connect(
	state => ({
		token: state.getIn(['auth', 'token']),
		accountLevel: state.getIn(['auth', 'accountLevel']),
	}),

	dispatch => ({
		onReLogin() {
			dispatch(reLogin());

			hashHistory.push('/');
		},

		onCheckToken(token) {
			dispatch(checkToken(token));
		},
	}),

)(Entry);
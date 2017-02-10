import { hashHistory } from 'react-router';
import { connect } from 'react-redux';
import { createAction } from 'redux-actions';
import Cookies from "js-cookie";
import AppNavbar from '../../Components/AppNavbar';
import { logout } from '../../actions/authAction';


export default connect(
	state => ({
		token: state.getIn(['auth','token']),
		accountLevel: state.getIn(['auth','accountLevel']),
	}),
	dispatch => ({
		onLogout: (e) => {
			Cookies.remove('token');
			Cookies.remove('accountLevel');
			Cookies.remove('itemPermission');

			dispatch(logout());

			hashHistory.push('/');
		},
		onEdit: (e) => {
			hashHistory.push('/entry/profile/edit');
		},
		onPerSetting: (e) => {

		},
		onCreateUser: (e) => {
			hashHistory.push('/entry/profile/create');
		},
	}),
)(AppNavbar);
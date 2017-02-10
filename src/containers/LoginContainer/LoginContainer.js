import { hashHistory } from 'react-router';
import { connect } from 'react-redux';
import { createAction } from 'redux-actions';
import Cookies from "js-cookie";
import Login from '../../components/Login'
import { login } from '../../actions/authAction';


export default connect(
	(state) => ({
		// token: state.get('token'),
	}),
	(dispatch) => ({
		onLogin: (e) => {
			e.preventDefault();

			var state = {
				token: '4FDED337B17318EA8A240100011D72C7',
				accountLevel: 0,
				itemPermission: '6506',
			};

			// 驗證後端還未實作，先暫時回傳假資料
			dispatch( login(state));

			// Cookies.set('token', '4FDED337B17318EA8A240100011D72C7');
			Cookies.set(state);

			//頁面導向
			hashHistory.push('/entry');
		}
	}),
)(Login);
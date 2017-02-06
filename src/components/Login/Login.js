import FormInput from '../form/input/input';
import React from 'react';
import { hashHistory } from 'react-router';
var Cookies = require("js-cookie");

export default class Login extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};

		this.toValidate = this.toValidate.bind(this);
	}

	toValidate(e) {
		e.preventDefault();

		// 驗證端還沒做好咧
		console.log('pass');

		//頁面導向
		hashHistory.push('/entry');


		Cookies.set('token', '4FDED337B17318EA8A240100011D72C7');
	}

	render() {
		return (
			<div className="login-form container">
				<h3>網頁後台維護系統</h3>
				<hr/>

				<form onSubmit={this.toValidate}>
					<FormInput type="Email"/>
					<FormInput type="Password"/>
					<button type="submit" className="btn btn-primary">登入</button>
				</form>
			</div>
		);
	}
}


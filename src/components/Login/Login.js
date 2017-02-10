import FormInput from '../form/input/input';
import React from 'react';

const Login = ({
	onLogin,
}) => (
	<div className="login-form container">
		<h3>網頁後台維護系統</h3>
		<hr/>

		<form onSubmit={onLogin}>
			<FormInput type="Email"/>
			<FormInput type="Password"/>
			<button type="submit" className="btn btn-primary">登入</button>
		</form>
	</div>
);

export default Login;
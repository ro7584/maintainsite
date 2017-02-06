import React from 'react';
import FormInput from '../form/input/input';
import { FormGroup, ControlLabel, FormControl, HelpBlock } from 'react-bootstrap';


export default class Profile extends React.Component {
	constructor(props) {
		super(props);

		// 相關變數初始化
		this.state = {
			currentPwd: {
				state: null,
				helpText: '',
			},
			newPwd: {
				state: null,
				helpText: '',
				value: '',
			},
			confirmPwd: {
				state: null,
				helpText: '',
			},
		};
		this.legallyPwd = "^[A-Za-z0-9]+$";
		this.legallyPwdText = "僅可輸入英文字母及數字";

		// 相關事件需綁定 this
		this.changePassword = this.changePassword.bind(this);
		this.validateCurrent = this.validateCurrent.bind(this);
		this.validateNew = this.validateNew.bind(this);
		this.validateConfirm = this.validateConfirm.bind(this);
	}


	// 送出變更密碼
	changePassword(e) {
		e.preventDefault();

		if ( !this.validator(this.state) ) {
			alert('目前仍有欄位未填寫正確，請重新輸入');
			return;
		}

		alert('修改成功');
	}

	// 檢查是否所有欄位皆正確
	validator(inputs) {
		var isAllLegal = true;

		for (let [key, value] of entries(inputs)) {
			if ( value.state !== 'success' ) {
				isAllLegal = false;
				break;
			}
		}

		return isAllLegal;
	}



	//驗證目前密碼是否正確
	validateCurrent(e) {
		let helpText, state;

		switch(e.target.value) {
			case "":
				state = 'warning';
				helpText = '密碼不可為空值';
				break;
			case "123":
				state = 'success';
				helpText = '';
				break;
			default:
				state = 'error';
				helpText = '密碼錯誤';
				break;
		}

		this.setState({
			currentPwd: {
				state: state,
				helpText: helpText,
			}
		});
	}

	//驗證目前新密碼是否符合格式
	validateNew(e) {
		let helpText = ""
		,	state = 'success'
		,	password = e.target.value;

		let patt = new RegExp(this.legallyPwd);

		if ( !patt.test(password) ) {
			helpText = this.legallyPwdText;
			state = "error";
		}

		this.setState({
			newPwd: {
				state: state,
				helpText: helpText,
				value: password,
			}
		});
	}

	//驗證目前確認密碼是否符合格式及相同
	validateConfirm(e) {
		let helpText = ""
		,	state = 'success'
		,	password = e.target.value;

		let patt = new RegExp(this.legallyPwd);

		if ( !patt.test(password) ) {
			helpText = this.legallyPwdText;
			state = "error";
		} else if ( password !== this.state.newPwd.value ) {
			helpText = "重複密碼不一致，請重新輸入相同密碼";
			state = "error";
		}

		this.setState({
			confirmPwd: {
				state: state,
				helpText: helpText,
			}
		});
	}

	render() {
		return(
			<div className="common-form container">
				<form onSubmit={this.changePassword}>
					<FormGroup>
						<ControlLabel>Email</ControlLabel>
						<FormControl.Static>
							email@example.com
						</FormControl.Static>
					</FormGroup>
					<FormGroup>
						<ControlLabel>Department</ControlLabel>
						<FormControl.Static>
							Sysjust - SI
						</FormControl.Static>
					</FormGroup>
					<hr />
					<FormGroup
						controlId="currentPwd"
						validationState={this.state.currentPwd.state}
						onBlur={this.validateCurrent}>

						<ControlLabel>目前使用的密碼</ControlLabel>
						<FormControl type="password"
							pattern={this.legallyPwd}
							title={this.legallyPwdText} />
						<FormControl.Feedback />
						<HelpBlock>{this.state.currentPwd.helpText}</HelpBlock>
					</FormGroup>
					<FormGroup
						controlId="newPwd"
						validationState={this.state.newPwd.state}
						onBlur={this.validateNew}>

						<ControlLabel>新密碼</ControlLabel>
						<FormControl type="password"
							pattern={this.legallyPwd}
							title={this.legallyPwdText} />
						<FormControl.Feedback />
						<HelpBlock>{this.state.newPwd.helpText}</HelpBlock>
					</FormGroup>
					<FormGroup
						controlId="confirmPwd"
						validationState={this.state.confirmPwd.state}
						onBlur={this.validateConfirm}>

						<ControlLabel>確認新密碼</ControlLabel>
						<FormControl type="password"
							pattern={this.legallyPwd}
							title={this.legallyPwdText} />
						<FormControl.Feedback />
						<HelpBlock>{this.state.confirmPwd.helpText}</HelpBlock>
					</FormGroup>

					<button type="submit" className="btn btn-primary">登入</button>
				</form>
			</div>
		);
	}
}

// using a generator function, kind of likely jquery map function
function* entries(obj) {
	for (let key of Object.keys(obj)) {
		yield [key, obj[key]];
	}
}
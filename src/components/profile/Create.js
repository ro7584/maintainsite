import React from 'react';
import FormInput from '../form/input/input';
import { FormGroup, ControlLabel, FormControl, HelpBlock } from 'react-bootstrap';


export class Create extends React.Component {
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


	render() {
		return(
			<div className="common-form container">
				<form onSubmit={this.changePassword}>
					<FormGroup
						controlId="Email"
						validationState={this.state.email.state}
						onBlur={this.validateEmail}>

						<ControlLabel>Email</ControlLabel>
						<FormControl type="email"
							pattern={this.legallyEmail}
							title={this.legallyEmailText} />
						<FormControl.Feedback />
						<HelpBlock>{this.state.email.helpText}</HelpBlock>
					</FormGroup>
					<FormGroup
						controlId="Department"
						validationState={this.state.department.state}
						onBlur={this.validateDepartment}>

						<ControlLabel>Department</ControlLabel>
						<FormControl type="text"
							pattern={this.legallyDepartment}
							title={this.legallyDepartmentText} />
						<FormControl.Feedback />
						<HelpBlock>{this.state.department.helpText}</HelpBlock>
					</FormGroup>


					<button type="submit" className="btn btn-primary">送出</button>
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
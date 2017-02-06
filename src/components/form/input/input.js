import React from 'react';

const FormLoginInput = (props) => {
	let text = !!props.text?
		props.text:
		props.type;
	let input = props.type.toLowerCase() !== 'password'?
		<input type={props.type} className="form-control" id={props.type}/>:
		<input type={props.type} className="form-control" id={props.type} pattern="^[A-Za-z0-9]+$" title="僅可輸入英文字母及數字"/>;

	return(
		<div className="form-group">
			<label >{text}:</label>
			{input}
		</div>
	);
};

export default FormLoginInput;
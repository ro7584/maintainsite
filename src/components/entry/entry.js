import React, { Component, PropTypes } from 'react';

import AppNavbarContainer from '../../Containers/AppNavbarContainer';

export default class Entry extends Component {
	static PropTypes = {
		children: PropTypes.object,

	}

	constructor(props) {
		super(props);

		props.onCheckToken();
	}

	render() {
		const { accountLevel, children, onReLogin } = this.props;


		return accountLevel == -2? (
				<a onClick={onReLogin}>請重新登入</a>
			) : (
				<div className="container-fluid">
					<AppNavbarContainer />
					<div className="content">
						{children}
					</div>
				</div>
			);
	}
}
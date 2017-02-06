import React from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { hashHistory } from 'react-router';

export default class NavbarInstance extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};

		this.logout = this.logout.bind(this);
		this.profile = this.profile.bind(this);
	}

	logout() {
		hashHistory.push('/');
	}

	profile() {
		hashHistory.push('/entry/profile');
	}

	render() {
		return(
			<Navbar collapseOnSelect fluid fixedTop>
				<Navbar.Header>
					<Navbar.Brand>
						<a href="#">網頁後台維護系統</a>
					</Navbar.Brand>
					<Navbar.Toggle />
				</Navbar.Header>
				<Navbar.Collapse>
				<Nav pullRight>
					<NavItem eventKey={1} href="#">權限設定</NavItem>
					<NavItem eventKey={2} href="#">維護項目</NavItem>
					<NavDropdown eventKey={3} title="帳戶管理" id="basic-nav-dropdown">
					<MenuItem eventKey={3.1} onClick={this.profile}>修改密碼</MenuItem>
					<MenuItem divider />
					<MenuItem eventKey={3.2} onClick={this.logout}>登出</MenuItem>
					</NavDropdown>
				</Nav>
				</Navbar.Collapse>
			</Navbar>
		);
	}
}
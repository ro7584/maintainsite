import React from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { hashHistory } from 'react-router';

const PermissionSetting = ({accountLevel, onPerSetting, onCreateUser}) => {

	if ( accountLevel !== 0 )
		return null;

	return (
		<NavDropdown eventKey={1} title="帳戶及權限管理" id="permission-nav-dropdown">
			<MenuItem eventKey={1.1} onClick={onPerSetting}>權限設定</MenuItem>
			<MenuItem eventKey={1.2} onClick={onCreateUser}>新增使用者</MenuItem>
		</NavDropdown>
	);
}

const AppNavbar = ({
	onLogout,
	onEdit,
	onPerSetting,
	onCreateUser,
	accountLevel,
}) => (
	<Navbar collapseOnSelect fluid fixedTop>
		<Navbar.Header>
			<Navbar.Brand>
				<a href="#">網頁後台維護系統</a>
			</Navbar.Brand>
			<Navbar.Toggle />
		</Navbar.Header>
		<Navbar.Collapse>
		<Nav pullRight>
			<PermissionSetting
				createUser={onCreateUser}
				perSetting={onPerSetting}
				accountLevel={accountLevel}
			/>
			<NavItem eventKey={2} href="#">維護項目</NavItem>
			<NavDropdown eventKey={3} title="帳戶管理" id="account-nav-dropdown">
				<MenuItem eventKey={3.1} onClick={onEdit}>修改密碼</MenuItem>
				<MenuItem divider />
				<MenuItem eventKey={3.2} onClick={onLogout}>登出</MenuItem>
			</NavDropdown>
		</Nav>
		</Navbar.Collapse>

	</Navbar>
);

export default AppNavbar;

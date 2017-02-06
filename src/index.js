import '../res/styles/main.less'
import React from 'react';
import ReactDom from 'react-dom';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import App from './components/App';
import Login from './components/Login';
import Entry from './components/Entry';
import Home from './components/Home';
import Profile from './components/Profile';


ReactDom.render(
	<Router history={hashHistory}>
		<Route path="/" component={App}>
			<IndexRoute component={Login} />
			<Route path="entry" component={Entry}>
				<IndexRoute component={Home} />
				<Route path="profile" component={Profile} />
			</Route>
		</Route>
	</Router>,
	document.getElementById('app')
);
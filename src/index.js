import '../res/styles/main.less'
import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import App from './Components/App';
import LoginContainer from './Containers/LoginContainer';
import EntryContainer from './Containers/EntryContainer';
import Home from './Components/Home';
import { Edit, Create, Profile } from './Components/Profile';
import store from './store';

ReactDom.render(
	<Provider store={store}>
		<Router history={hashHistory}>
			<Route path="/" component={App}>
				<IndexRoute component={LoginContainer} />
				<Route path="entry" component={EntryContainer}>
					<IndexRoute component={Home} />
					<Route path="profile" component={Profile}>
						<Route path="edit" component={Edit} />
						<Route path="create" component={Create} />
					</Route>
				</Route>
			</Route>
		</Router>
	</Provider>,
	document.getElementById('app')
);
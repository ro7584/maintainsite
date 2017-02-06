import Navbar from '../Navbar';
import React from 'react';

const App = (props) => (
	<div className="container-fluid">
		<Navbar />
		<div className="content">
			{props.children}
		</div>
	</div>
);

App.PropTypes = {
	children: React.PropTypes.object
};

export default App;



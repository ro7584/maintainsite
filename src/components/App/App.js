import React from 'react';

const App = (props) => (
	<div>
		{props.children}
	</div>
);

App.PropTypes = {
	children: React.PropTypes.object
};

export default App;



import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
	return (
		<div>Iron Ledger</div>
	);
};

// Render app in the DOM after Meteor loads in the browser
Meteor.startup(() => {
	// React render call
	ReactDOM.render(<App />, document.querySelector('.container'));
});

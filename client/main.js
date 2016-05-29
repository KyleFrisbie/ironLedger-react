import React from 'react';
import ReactDOM from 'react-dom';

import WorkoutList from './components/workout_list';

const App = () => {
	return (
		<div>
			<div>Iron Ledger</div>
			<WorkoutList />
		</div>
	);
};

// Render app in the DOM after Meteor loads in the browser
Meteor.startup(() => {
	// React render call
	ReactDOM.render(<App />, document.querySelector('.container'));
});

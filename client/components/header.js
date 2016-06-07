import React, {Component} from 'react';
import {Link, browserHistory} from 'react-router';

import Accounts from './accounts';

class Header extends Component {
	render() {
		return (
			<nav className="nav navbar-default">
				<div className="navbar-header">
					<Link to="/" className="navbar-brand">Iron Ledger</Link>
				</div>
				<ul className="nav navbar-nav">
					<li>
						<Link to="/">Workouts</Link>
					</li>
					<li>
						<Link to="/exercises">Exercises</Link>
					</li>
					<li>
						<Accounts />
					</li>
				</ul>
			</nav>
		)
	}
}

export default Header;

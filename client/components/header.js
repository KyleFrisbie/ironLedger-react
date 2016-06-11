import React, {Component} from 'react';
import {Link, browserHistory} from 'react-router';

import Accounts from './accounts';

class Header extends Component {
	render() {
		return (
			<nav className="nav navbar-inverse">
				<div className="navbar-header">
					<Link to="/" className="navbar-brand">Iron Ledger</Link>
				</div>
				<ul className="nav navbar-nav">
					<li>
						<Link to="/workouts" activeClassName="active">Workouts</Link>
					</li>
					<li>
						<Link to="/exercises" activeClassName="active">Exercises</Link>
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

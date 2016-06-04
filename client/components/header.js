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
						<a href="#">Exercises</a>
					</li>
					<li>
						<a href="#">Workouts</a>
					</li>
				</ul>
			</nav>
		)
	}
}

export default Header;

var React = require('react');
const {Link, IndexLink} = require('react-router');
var Nav = (props) => {
	return (
		<div>
			<div className="top-bar">
					<div className="top-bar-left">
						<ul className="menu">
							<li className="menu-text"> ReactTimer</li>
						  	<li><IndexLink activeClassName="active-link" to="/">Timer</IndexLink></li>
						  	<li><Link activeClassName="active-link" to="/countdown">Countdown</Link></li>
						</ul>
					</div>
					<div className="top-bar-right">
						<ul className="menu">
							<li className="menu-text">Created by <a href="http://www.inlightmedia.ca" target="_blank">Josh Dyck</a></li>
						</ul>
					</div>
			</div>
		</div>
	);
}

module.exports = Nav;

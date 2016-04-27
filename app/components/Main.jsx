var React = require('react');
var Nav = require('Nav');
// OLD STANDARD SYNTAX
// ===================
// var Main = React.createClass({
// 	render: function() {
// 		return (
// 			<div>
// 				<h2>Main Component</h2>
// 				{this.props.children}
// 			</div>
// 		);
// 	}
// });


// NEW STATELESS FUNCTIONAL REACT COMPONENT SYNTAX
// ===============================================
var Main = (props) => {
	return (
		<div>
			<div>
				<Nav/>
				<p>Main JSX Loaded</p>
				<div>
					{props.children}
				</div>
			</div>
		</div>
	);
}

module.exports = Main;

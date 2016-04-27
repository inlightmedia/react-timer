var React = require('react');
var Clock = require('Clock');

var Timer = () => {
	return (
		<div>
			<h2>Timer Header</h2>
			<Clock totalSeconds={129}/>
		</div>
	);
};

module.exports = Timer;

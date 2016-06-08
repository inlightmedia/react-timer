var React = require('react');
var Clock = require('Clock');
var CountdownForm = require('CountdownForm');
var Controls = require('Controls');

var Countdown = React.createClass({
	getInitialState: function() {
		return {
			count: 0,
			countdownStatus: 'stopped'
		};
	},
	startTimer: function(){
		this.timer = setInterval( () => {
			var newCount = this.state.count - 1;
			this.setState({
				count: newCount >= 0 ? newCount : 0
			});
			if (newCount === 0 ) {
				this.setState({
					countdownStatus: 'stopped'
				});
				// animate the circle???
			}
		}, 1000);

	},
	componentWillUnmount: function () {
		console.log('component Did Unmount');
		clearInterval(this.timer);
		this.timer = null;
	},
	// componentWillMount: function () {
	// 	console.log('Component is about to mount but hasn\'t yet.');
	// },
	// componentDidMount: function () {
	// 	console.log('Component did mount.');
	// },
	componentDidUpdate: function (prevProps, prevState) {  // This gets called by all react apps when the state or props change change
		if (this.state.countdownStatus !== prevState.countdownStatus) {
			switch(this.state.countdownStatus) {
				case 'started' :
					this.startTimer();
					break;
				case 'stopped' :
					this.setState({
						count: 0
					});
				case 'paused' :
					clearInterval(this.timer);
					this.timer = null;
					break;
			}
		}
	},
	handleSetCountdown: function(seconds){
		this.setState({
			count: seconds,
			countdownStatus: 'started'
		})
	},
	handleStatusChange: function (newStatus) {
		this.setState({
			countdownStatus: newStatus
		});
	},
	render: function() {
		var {count, countdownStatus} = this.state;
		var renderControlArea = () => {
			if (countdownStatus !== 'stopped') {
				return <Controls countdownStatus={countdownStatus} onStatusChange={this.handleStatusChange} />
			} else {
				return <CountdownForm onSetCountdown={this.handleSetCountdown}/>
			}
		};

		return (
			<div>
				<Clock totalSeconds={count}/>
				{renderControlArea()}
			</div>
		);
	}
});

module.exports = Countdown;

var React = require('react');
var Clock = require('Clock');
var Controls = require('Controls');

var Timer = React.createClass({
	getInitialState: function() {
		return {
			count: 0,
			timerStatus: 'stopped'
		};
	},
	startTimer: function(){
		this.timer = setInterval( () => {
			var newCount = this.state.count + 1;
			this.setState({
				count: newCount
			});
		}, 1000);
	},
	componentWillUnmount: function () {
		console.log('component Did Unmount');
		clearInterval(this.timer);
		this.timer = null;
	},
	componentDidUpdate: function (prevProps, prevState) {  // This gets called by all react apps when the state or props change change
		if (this.state.timerStatus !== prevState.timerStatus) {
			switch(this.state.timerStatus) {
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
	handleSetTimer: function(seconds){
		this.setState({
			count: seconds,
			timerStatus: 'started'
		})
	},
	handleStatusChange: function (newStatus) {
		this.setState({
			timerStatus: newStatus
		});
	},
	render: function () {
		var {count, timerStatus} = this.state;

		return (
			<div>
				<h1 className="page-title">Timer App</h1>
				<Clock totalSeconds={count}/>
				<Controls countdownStatus={timerStatus} onStatusChange={this.handleStatusChange} />
			</div>
		);
	}
});

module.exports = Timer;

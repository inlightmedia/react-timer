var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');
var expect = require('expect');

var Timer = require('Timer');
describe('Timer', () => {
	it('should exist', () => {
		expect(Timer).toExist();
	});
	describe('handleSetTimer', () => {
		it('should start if started', (done) =>{
			var timer = TestUtils.renderIntoDocument(<Timer />);
			timer.handleSetTimer(0);
			expect(timer.state.count).toBe(0);

			timer.handleStatusChange('started');
			expect(timer.state.timerStatus).toBe('started');

			setTimeout(()=>{
				expect(timer.state.count).toBe(1);
				done();
			}, 1010);
		});

		it('should pause if paused', (done) =>{
			var timer = TestUtils.renderIntoDocument(<Timer />);
			timer.handleSetTimer(1);
			timer.handleStatusChange('started');
			timer.handleStatusChange('paused');

			setTimeout(()=>{
				expect(timer.state.count).toBe(1);
				expect(timer.state.timerStatus).toBe('paused');
				done();
			}, 2010);
		});

		it('should stop if stopped', (done) =>{
			var timer = TestUtils.renderIntoDocument(<Timer />);
			timer.handleSetTimer(4);
			timer.handleStatusChange('started');
			timer.handleStatusChange('stopped');
			setTimeout(()=>{
				expect(timer.state.count).toBe(0);
				expect(timer.state.timerStatus).toBe('stopped');
				done();
			}, 2010);
		});


	});
});

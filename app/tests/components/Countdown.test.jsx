var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');
var expect = require('expect');

var Countdown = require('Countdown');

describe('Countdown', () => {
	it('should exist', () => {
		expect(Countdown).toExist();
	});

	describe('handleSetCountdown', () => {
		it('should set state to started and begin countdown', (done) => {
			var countdown = TestUtils.renderIntoDocument(<Countdown />);
			countdown.handleSetCountdown(10);
			expect(countdown.state.count).toBe(10);
			expect(countdown.state.countdownStatus).toBe('started');
			setTimeout(()=>{
				expect(countdown.state.count).toBe(9);
				done();
			}, 1010);


		});

		it('should never be negative', (done) => { // pass in done so that the test will not finish until async code completes
			var countdown = TestUtils.renderIntoDocument(<Countdown />);
			countdown.handleSetCountdown(1);
			expect(countdown.state.count).toBe(1);
			expect(countdown.state.countdownStatus).toBe('started');
			setTimeout(()=>{
				expect(countdown.state.count).toBe(0);
				done();
			}, 3010);
		});

		it('should pause countdown on paused status', (done) => { // pass in done so that the test will not finish until async code completes
			var countdown = TestUtils.renderIntoDocument(<Countdown />);
			countdown.handleSetCountdown(1);
			countdown.handleStatusChange('paused');
			expect(countdown.state.countdownStatus).toBe('paused');
			setTimeout(()=>{
				expect(countdown.state.count).toBe(1);
				done();
			}, 3010);
		});

		it('should stop countdown on stopped status', (done) => { // pass in done so that the test will not finish until async code completes
			var countdown = TestUtils.renderIntoDocument(<Countdown />);
			countdown.handleSetCountdown(1);
			countdown.handleStatusChange('stopped');
			expect(countdown.state.countdownStatus).toBe('stopped');
			setTimeout(()=>{
				expect(countdown.state.count).toBe(0);
				done();
			}, 3010);
		});
	});

});

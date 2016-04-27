var React 		= 	require('react');
var ReactDOM 	= 	require('react-dom');

// Initialize Routing
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

// The above var is the same as the below but uses an ES6 feature shorthand:
// var Route = require('react-router').Route; var Router = require('react-router').Router; var IndexRoute = require('react-router').IndexRoute; var hashHistory = require('react-router').hashHistory;

// Load foundation
// style! injects into the HTML css! loads into the JS
require('style!css!foundation-sites/dist/foundation.min.css');
require('style!css!sass!applicationStyles');
$(document).foundation();

var Main = require('Main');
var Countdown = require('Countdown');
var Timer = require('Timer');


ReactDOM.render(
	<Router history={hashHistory}>
		<Route path="/" component={Main}>
			<IndexRoute component={Timer}/>  {/*This is the default route.*/}
			<Route path="/countdown" component={Countdown} />
		</Route>
	</Router>,
	document.getElementById('app')
);

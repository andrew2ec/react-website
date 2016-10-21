'use strict';

var React = require('react');
var ReactDOM = require('react-dom');
var heading = require('./components/heading.jsx');

ReactDOM.render(React.createElement('heading', { title: 'Andrew\'s Website', content: 'Welcome to my website' }), document.getElementById('top'));
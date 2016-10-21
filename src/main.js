'use strict';

var React = require('react');
var ReactDOM = require('react-dom');
var LeadItem = require('./components/heading.jsx');
ReactDOM.render(React.createElement(LeadItem, { title: 'Andrew\'s Website',
  content: 'Welcome to my website',
  background: 'yellow' }), document.getElementById('top'));

'use strict';

var React = require('react');
var ReactDOM = require('react-dom');
var LeadItem = require('./components/heading.jsx');
var SearchBox = require('./components/searchBox.jsx');

ReactDOM.render(React.createElement(LeadItem, { title: 'Andrew\'s Website',
  content: 'Welcome to my website',
  background: 'yellow' }), document.getElementById('top'));

ReactDOM.render(React.createElement(SearchBox, { title: 'Search' }), document.getElementById('searchdiv'));

'use strict';

var React = require('react');
var ReactDOM = require('react-dom');
var LeadItem = require('./components/heading.jsx');
var SearchBox = require('./components/searchBox.jsx');
var JumboItem = require('./components/Jumbo.jsx');

ReactDOM.render(React.createElement(LeadItem, { title: 'Andrew\'s Website',
  content: 'Welcome to my website',
  background: '#b300b3' }), document.getElementById('top'));

ReactDOM.render(React.createElement(SearchBox, { searchTitle: 'Search' }), document.getElementById('searchdiv'));
ReactDOM.render(React.createElement(JumboItem, { title: 'React.JS', imgSrc: 'images/nebula.jpeg', content: 'This is a website being built with React.js' }), document.getElementById('jumbo'));

var React = require('react');
var ReactDOM = require('react-dom');
var LeadItem = require('./components/heading.jsx');
var searchBox = require('./components/searchBox.jsx');
ReactDOM.render(<LeadItem title="Andrew's Website"
 content="Welcome to my website"
 background="yellow" />, document.getElementById('top'));
ReactDOM.render(<searchBox title="Search" />, document.getElementById('searchdiv'));

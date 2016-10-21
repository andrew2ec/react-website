var React = require('react');
var ReactDOM = require('react-dom');
var LeadItem = require('./components/heading.jsx');
var SearchBox = require('./components/searchBox.jsx');

ReactDOM.render(<LeadItem title="Andrew's Website"
 content="Welcome to my website"
 background="yellow" />, document.getElementById('top'));

ReactDOM.render(<SearchBox title="Search" />, document.getElementById('searchdiv'));

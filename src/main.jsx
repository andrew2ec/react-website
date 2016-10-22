var React = require('react');
var ReactDOM = require('react-dom');
var LeadItem = require('./components/heading.jsx');
var SearchBox = require('./components/searchBox.jsx');
var JumboItem = require('./components/Jumbo.jsx');

ReactDOM.render(<LeadItem title="Andrew's Website"
 content="Welcome to my website"
 background="#b300b3" />, document.getElementById('top'));

ReactDOM.render(<SearchBox searchTitle="Search" />, document.getElementById('searchdiv'));
ReactDOM.render(<JumboItem title="React.JS" imgSrc="images/nebula.jpeg" content="This is a website being built with React.js" />, document.getElementById('jumbo'));

var React = require('react');
var SearchItem = require('./searchItem.jsx');

var SearchList = React.createClass({
	render: function(){
		var createItem = function(text, index){
			return <SearchItem key={index + text} text={text} />;
		};
		return(
			<ul>{this.props.items.map(createItem)}</ul>
		);
	}
});
module.exports = SearchList;

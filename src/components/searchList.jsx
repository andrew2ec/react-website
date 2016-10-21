var React = require('react');
var searchItem = require('./searchItem.jsx');

var searchList = React.createClass({
	render:function(){
		var createList = function(search, index){
			return <searchItem key={index + search} text={search} />
		}
		return(
			<ul>
				<h2>{this.props.items.map(createList)}</h2>
			</ul>
		);
	}
});
module.exports = searchList;

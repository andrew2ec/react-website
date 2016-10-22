var React = require('react');

var SearchItem = React.createClass({
	render: function(){
		return(
			<li>
				<h3>{this.props.text}</h3>
			</li>
		);
	}
});
module.exports = SearchItem;

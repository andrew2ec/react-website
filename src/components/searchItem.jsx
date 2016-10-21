var React = require('react');
var searchItem = React.createClass({
	render:function(){
		return(
			<li>
				<h3>{this.props.search}</h3>
			</li>
		);
	}
});
module.exports = searchItem;

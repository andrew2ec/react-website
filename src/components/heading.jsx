var React = require('react');

var heading = React.createClass({
	render:function(){
		return(
			<div>
				<div>
					<h1>{this.props.title}</h1>
				</div>
				<div>
					<p>{this.props.content}</p>
				</div>
			</div>
		);
	}
});
module.exports = heading;
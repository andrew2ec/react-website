var React = require('react');

var JumboItem = React.createClass({
	render:function(){

		var containerStyle = {
			maxHeight:'400',
			minHeight:'400',
			backgroundSize:'cover'
		}
		if(this.props.imgSrc){
			containerStyle.backgroundImage = 'url(' + this.props.imgSrc + ')';
		}
		var headerStyle = {
			color:'white'
		}
		var contentStyle = {
			color:'white'
		}
		return(
			<div style={containerStyle} className="jumbotron">
  				<h1 style={headerStyle}>{this.props.title}</h1>
  				<p style={contentStyle}>{this.props.content}</p>
			</div>
		);
	}
});
module.exports = JumboItem;

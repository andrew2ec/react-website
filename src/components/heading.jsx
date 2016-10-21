var React = require('react');
var LeadItem = React.createClass({
	render:function(){

	    var divStyle = {
			marginTop:'10',
			position:'relative'
		}
		if(this.props.background){
			divStyle.background = this.props.background;
		}
		var titleStyle = {
			textAlign:'center'
		}
		var contentStyle = {
			textAlign:'right',
			marginRight:'10'
		}
		return(
			<div style={divStyle}>
				<div>
					<h1 style={titleStyle}>{this.props.title}</h1>
				</div>
				<div>
					<p style={contentStyle}>{this.props.content}</p>
				</div>
			</div>
		);
	}
});
module.exports = LeadItem;

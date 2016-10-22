var React = require('react');
var LeadItem = React.createClass({
	render:function(){

	    var divStyle = {
			position:'relative'
		}
		if(this.props.background){
			divStyle.background = this.props.background;
		}
		var titleStyle = {
			textAlign:'center',
			color:'white'
		}
		return(
			<div style={divStyle}>
				<div>
					<h1 style={titleStyle}>{this.props.title}</h1>
				</div>
			</div>
		);
	}
});
module.exports = LeadItem;

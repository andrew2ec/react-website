var React = require('react');
var LeadItem = React.createClass({
	render:function(){

	    var divStyle = {
			marginTop:'10',
			background:'orange'
		}
		if(this.props.background){
			divStyle.background = this.props.background;
		}
		var titleStyle = {

		}
		return(
			<div style={divStyle}>
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
module.exports = LeadItem;

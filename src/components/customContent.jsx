var React = require('react');

var CustomContent = React.createClass({
	render:function(){

		var divStyle = {
			borderRadius:'10'
		}
		if(this.props.background){
			divStyle.background = this.props.background;
		}
		var headingStyle = {
			textAlign:'center'
		}
		return(
			<div style={divStyle} className="list-group col-md-4">
  				<a href="#" class="list-group-item active">
    				<h4 style={headingStyle} class="list-group-item-heading">{this.props.head}</h4>
    			</a>
    				<p class="list-group-item-text">{this.props.content}</p>
			</div>
		);
	}
});
module.exports = CustomContent;

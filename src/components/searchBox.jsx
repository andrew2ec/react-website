var React = require('react');
var searchList = require('./searchList.jsx');

var SearchBox = React.createClass({
	getInitialState:function(){
		return({items:[], newItemText:''});
	},
	onChange:function(e){
		this.setState({newItemText: e.target.value});
	},
	handleSubmit:function(e){
		e.preventDefault();
		var createItem = this.state.items;
		createItem.push(this.state.newItemText);
		this.setState({items:createItem, newItemText:''});
	},
	render:function(){
		var divStyle = {
			marginTop:'10',
			float:'right',
			paddingRight:'10'
		}
		return(
			<div style={divStyle}>
				<h2>{this.props.title}</h2>
				<form onSubmit={this.handleSubmit}>
					<input className="form-control" onChange={this.onChange} value={this.state.newItemText} />
					<button className="btn btn-primary">Search</button>
				</form>
				<searchList items={this.props.items} />
			</div>
		);
	}
});
module.exports = SearchBox;

var React = require('react');
var SearchList = require('./searchList.jsx');

var SearchBox = React.createClass({
	getInitialState:function(){
		return({items:[], newItemText:''});
	},
	onChange:function(e){
		setState({newItemText: e.target.value});
	},
	handleSubmit:function(e){
		e.preventDefault();
		var createList = this.state.items;
		createList.push(this.state.newItemText);
		this.setState({items:createList, newItemText:''});
	},
	render:function(){

		var divStyle = {
			float:'right',
			paddingRight:'10'
		}
		return(
			<div style={divStyle}>
				<h1>{this.props.searchTitle}</h1>
				<form onSubmit={this.handleSubmit}>
					<input className="form-control" onChange={this.onChange} value={this.state.newItemText} />
					<button className="btn btn-primary">Search</button>
				</form>
				<SearchList items={this.state.items} />;
			</div>
		);
	}
});
module.exports = SearchBox;

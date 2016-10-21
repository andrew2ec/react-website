'use strict';

var React = require('react');
var searchList = require('./searchList.jsx');

var SearchBox = React.createClass({
   displayName: 'SearchBox',

   getInitialState: function getInitialState() {
      return { items: [], newItemText: '' };
   },
   onChange: function onChange(e) {
      this.setState({ newItemText: e.target.value });
   },
   handleSubmit: function handleSubmit(e) {
      e.preventDefault();
      var createItem = this.state.items;
      createItem.push(this.state.newItemText);
      this.setState({ items: createItem, newItemText: '' });
   },
   render: function render() {
      var divStyle = {
         marginTop: '10',
         float: 'right',
         paddingRight: '10'
      };
      return React.createElement(
         'div',
         { style: divStyle },
         React.createElement(
            'h2',
            null,
            this.props.title
         ),
         React.createElement(
            'form',
            { onSubmit: this.handleSubmit },
            React.createElement('input', { className: 'form-control', onChange: this.onChange, value: this.state.newItemText }),
            React.createElement(
               'button',
               { className: 'btn btn-primary' },
               'Search'
            )
         ),
         React.createElement('searchList', { items: this.props.items })
      );
   }
});
module.exports = SearchBox;

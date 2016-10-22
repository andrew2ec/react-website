'use strict';

var React = require('react');
var SearchList = require('./searchList.jsx');

var SearchBox = React.createClass({
   displayName: 'SearchBox',

   getInitialState: function getInitialState() {
      return { items: [], newItemText: '' };
   },
   onChange: function onChange(e) {
      setState({ newItemText: e.target.value });
   },
   handleSubmit: function handleSubmit(e) {
      e.preventDefault();
      var createList = this.state.items;
      createList.push(this.state.newItemText);
      this.setState({ items: createList, newItemText: '' });
   },
   render: function render() {

      var divStyle = {
         float: 'right',
         paddingRight: '10'
      };
      return React.createElement(
         'div',
         { style: divStyle },
         React.createElement(
            'h1',
            null,
            this.props.searchTitle
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
         React.createElement(SearchList, { items: this.state.items }),
         ';'
      );
   }
});
module.exports = SearchBox;

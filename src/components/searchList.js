'use strict';

var React = require('react');
var SearchItem = require('./searchItem.jsx');

var SearchList = React.createClass({
   displayName: 'SearchList',

   render: function render() {
      var createItem = function createItem(text, index) {
         return React.createElement(SearchItem, { key: index + text, text: text });
      };
      return React.createElement(
         'ul',
         null,
         this.props.items.map(createItem)
      );
   }
});
module.exports = SearchList;

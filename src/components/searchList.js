'use strict';

var React = require('react');
var searchItem = require('./searchItem.jsx');

var searchList = React.createClass({
   displayName: 'searchList',

   render: function render() {
      var createList = function createList(search, index) {
         return React.createElement('searchItem', { key: index + search, text: search });
      };
      return React.createElement(
         'ul',
         null,
         React.createElement(
            'h2',
            null,
            this.props.items.map(createList)
         )
      );
   }
});
module.exports = searchList;

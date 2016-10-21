'use strict';

var React = require('react');
var SearchItem = React.createClass({
   displayName: 'SearchItem',

   render: function render() {
      return React.createElement(
         'li',
         null,
         React.createElement(
            'h3',
            null,
            this.props.search
         )
      );
   }
});
module.exports = SearchItem;

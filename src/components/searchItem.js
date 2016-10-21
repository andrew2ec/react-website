'use strict';

var React = require('react');
var searchItem = React.createClass({
   displayName: 'searchItem',

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
module.exports = searchItem;

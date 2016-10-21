'use strict';

var React = require('react');
var heading = React.createClass({
   displayName: 'heading',

   render: function render() {
      return React.createElement(
         'div',
         null,
         React.createElement(
            'div',
            null,
            React.createElement(
               'h1',
               null,
               this.props.title
            )
         ),
         React.createElement(
            'div',
            null,
            React.createElement(
               'p',
               null,
               this.props.content
            )
         )
      );
   }
});
module.exports = heading;

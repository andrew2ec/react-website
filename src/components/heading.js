'use strict';

var React = require('react');
var LeadItem = React.createClass({
   displayName: 'LeadItem',

   render: function render() {

      var divStyle = {
         marginTop: '10',
         background: 'orange'
      };
      if (this.props.background) {
         divStyle.background = this.props.background;
      }
      var titleStyle = {};
      return React.createElement(
         'div',
         { style: divStyle },
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
module.exports = LeadItem;

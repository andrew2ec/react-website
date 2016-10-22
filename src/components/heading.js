'use strict';

var React = require('react');
var LeadItem = React.createClass({
   displayName: 'LeadItem',

   render: function render() {

      var divStyle = {
         position: 'relative'
      };
      if (this.props.background) {
         divStyle.background = this.props.background;
      }
      var titleStyle = {
         textAlign: 'center',
         color: 'white'
      };
      return React.createElement(
         'div',
         { style: divStyle },
         React.createElement(
            'div',
            null,
            React.createElement(
               'h1',
               { style: titleStyle },
               this.props.title
            )
         )
      );
   }
});
module.exports = LeadItem;

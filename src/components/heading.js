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
         textAlign: 'center'
      };
      var contentStyle = {
         textAlign: 'right',
         paddingRight: '20'
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
         ),
         React.createElement(
            'div',
            null,
            React.createElement(
               'p',
               { style: contentStyle },
               this.props.content
            )
         )
      );
   }
});
module.exports = LeadItem;

'use strict';

var React = require('react');

var CustomContent = React.createClass({
   displayName: 'CustomContent',

   render: function render() {

      var divStyle = {
         borderRadius: '10'
      };
      if (this.props.background) {
         divStyle.background = this.props.background;
      }
      var headingStyle = {
         textAlign: 'center'
      };
      return React.createElement(
         'div',
         { style: divStyle, className: 'list-group col-md-4' },
         React.createElement(
            'a',
            { href: '#', 'class': 'list-group-item active' },
            React.createElement(
               'h4',
               { style: headingStyle, 'class': 'list-group-item-heading' },
               this.props.head
            )
         ),
         React.createElement(
            'p',
            { 'class': 'list-group-item-text' },
            this.props.content
         )
      );
   }
});
module.exports = CustomContent;

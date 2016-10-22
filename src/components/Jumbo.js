'use strict';

var React = require('react');

var JumboItem = React.createClass({
   displayName: 'JumboItem',

   render: function render() {

      var containerStyle = {
         maxHeight: '400',
         minHeight: '400',
         backgroundSize: 'cover'
      };
      if (this.props.imgSrc) {
         containerStyle.backgroundImage = 'url(' + this.props.imgSrc + ')';
      }
      var headerStyle = {
         color: 'white'
      };
      var contentStyle = {
         color: 'white'
      };
      return React.createElement(
         'div',
         { style: containerStyle, className: 'jumbotron' },
         React.createElement(
            'h1',
            { style: headerStyle },
            this.props.title
         ),
         React.createElement(
            'p',
            { style: contentStyle },
            this.props.content
         )
      );
   }
});
module.exports = JumboItem;

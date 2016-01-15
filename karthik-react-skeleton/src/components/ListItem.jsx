var React = require('react');

var ListItem = React.createClass({
  render: function() {
      return (<li id={this.props.key}>{this.props.name}</li>);
  }
});

module.exports = ListItem;

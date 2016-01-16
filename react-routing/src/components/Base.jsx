var React = require('react');

var Base = React.createClass({
  render: function() {
    return (<div>
      <h1>Country News</h1>
      <h3>Top stories in my country</h3>
      <a href="/#/news">News</a>
      <a href="/#/photos">Photos</a>
      {this.props.children}
      </div>);
  }
});

module.exports = Base;

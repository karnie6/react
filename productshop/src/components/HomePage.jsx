var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

var HomePage = React.createClass({
  render: function() {
    return (<div><h1>HOME PAGE</h1>
      <ul>
        <li><Link to="/product/55">iOS Course</Link></li>
        <li><Link to="/product/56">Android Course</Link></li>
      </ul>
      </div>);
  }
});

module.exports = HomePage;

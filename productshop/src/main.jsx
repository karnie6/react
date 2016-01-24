var React = require('react');

var ReactDom = require('react-dom');
var routes = require('./routes.jsx');
//ReactDom.render(<ListManager title="Karthik Test"/>, document.getElementById('ingredients'));
//ReactDom.render(<ListManager title="Todo"/>, document.getElementById('todo'));
//ReactDom.render(<ListManager title="Christmas List"/>, document.getElementById('christmas'));



ReactDom.render(routes, document.getElementById('main'));

var React = require('react');
var List = require('./components/List.jsx');
var Calculator = require('./components/Calculator.jsx');
var ReactDom = require('react-dom');

var items = [{"id": 1, "name" : "karthik1"}, {"id": 2, "name": "karthik2"}];

ReactDom.render(<Calculator />, document.getElementById('karthiklist'));
//ReactDom.render(<div>SUP2</div>, document.getElementById('karthiklist'));

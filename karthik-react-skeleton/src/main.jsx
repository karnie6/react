var React = require('react');
var List = require('./components/List.jsx');
var ReactDom = require('react-dom');

var items = [{"id": 1, "name" : "karthik1"}, {"id": 2, "name": "karthik2"}];

ReactDom.render(<List />, document.getElementById('karthiklist'));
//ReactDom.render(<div>SUP2</div>, document.getElementById('karthiklist'));

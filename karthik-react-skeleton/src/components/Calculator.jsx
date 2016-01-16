var React = require('react');
var NumberField = require('./NumberField.jsx');

var Calculator = React.createClass({
  getInitialState: function() {
    return {resultText: ""};
  },
  add: function() {
    var number1 = this.refs.numberField1.state.value;
    var number2 = this.refs.numberField2.state.value;
    var result = parseInt(number1) + parseInt(number2);
    this.setState({resultText: result});
  },
  subtract: function() {
    var number1 = this.refs.numberField1.state.value;
    var number2 = this.refs.numberField2.state.value;
    var result = parseInt(number1) - parseInt(number2);
    this.setState({resultText: result});
  },
  multiply: function() {
    var number1 = this.refs.numberField1.state.value;
    var number2 = this.refs.numberField2.state.value;
    var result = parseInt(number1) * parseInt(number2);
    this.setState({resultText: result});
  },
  divide: function() {
    var number1 = this.refs.numberField1.state.value;
    var number2 = this.refs.numberField2.state.value;
    var result = parseInt(number1) / parseInt(number2);
    this.setState({resultText: result});
  },
  clear: function() {
    this.setState({resultText: ""});
    this.refs.numberField1.clear();
    this.refs.numberField2.clear();
  },
  render: function() {
    return (<div className="col-sm-3">
      <div className="panel panel-default">
        <div className="panel-body">
        <NumberField sampleNumber="1337" ref="numberField1"/>
        <NumberField sampleNumber="2108" ref="numberField2"/>
        <button className="btn btn-primary" onClick={this.add}>+ Add</button>
        <button className="btn btn-primary" onClick={this.subtract}>- Subtract</button>
        <button className="btn btn-primary" onClick={this.multiply}>* Multiply</button>
        <button className="btn btn-primary" onClick={this.divide}>/ Divide</button>
        <div>Result : {this.state.resultText}</div>
        <button className="btn btn-primary" onClick={this.clear}>Clear</button>
        </div>
      </div>
    </div>);
  }
});

module.exports = Calculator;

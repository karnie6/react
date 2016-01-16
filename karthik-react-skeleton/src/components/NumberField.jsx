var React = require('react');

var NumberField = React.createClass({
  getInitialState: function() {
    return {value: ""};
  },
  onChange: function(e) {
    this.setState({value: e.target.value});
  },
  clear: function() {
    this.setState({value: ""});
  },
  render: function() {
    return (<input className="form-control" placeholder={"NUMBER e.g. " + this.props.sampleNumber} onChange={this.onChange} value={this.state.value} />);
  }
});

module.exports = NumberField;

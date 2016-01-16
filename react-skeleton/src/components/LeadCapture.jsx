var React = require('react');
var EmailField = require('./EmailField.jsx');
var NameField = require('./NameField.jsx');

var LeadCapture = React.createClass({
  onSubmit: function(e) {
    if (!this.refs.emailfield.state.valid) {
      alert('Valid Email Required!');
    } else {
      var httpRequestBody = {
        email: this.refs.emailfield.state.value,
        firstName: this.refs.namefield.state.value
      };
    }
  },
  render: function() {
    return (
      <div className="col-sm-3">
        <div className="panel panel-default">
          <div className="panel-body">
          <NameField type="First" ref="namefield"/>
          <EmailField ref="emailfield"/>
          <button className="btn btn-primary" onClick={this.onSubmit}>Submit</button>
          </div>
        </div>
      </div>
    );
  }

});

module.exports = LeadCapture;

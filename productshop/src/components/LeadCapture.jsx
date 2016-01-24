var React = require('react');
var EmailField = require('./EmailField.jsx');
var NameField = require('./NameField.jsx');
var Reflux = require('reflux');
var Actions = require('./reflux/action.jsx');
var LeadGenStore = require('./reflux/leadgen-store.jsx');

var LeadCapture = React.createClass({
  mixins:[Reflux.listenTo(LeadGenStore, 'onChange')],
  onSubmit: function(e) {
    if (!this.refs.emailfield.state.valid) {
      alert('Valid Email Required!');
    } else {
      var httpRequestBody = {
        email: this.refs.emailfield.state.value,
        firstName: this.refs.namefield.state.value
      };

      Actions.storeLeadGen(httpRequestBody);
    }
  },
  render: function() {
    return (
        <div className="panel panel-default">
          <div className="panel-body">
          <NameField type="First" ref="namefield"/>
          <EmailField ref="emailfield"/>
          <div className="row">
            <div className="col-sm-6">
            <button className="btn btn-primary" onClick={this.onSubmit}>Submit</button>
            </div>
          </div>
          </div>
        </div>
    );
  }

});

module.exports = LeadCapture;

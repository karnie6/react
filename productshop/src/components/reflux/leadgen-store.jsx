var HTTP = require('../services/httpservice.jsx');
var Reflux = require('reflux');
var Actions = require('./action.jsx');

var LeadGenStore = Reflux.createStore({
  listenables: [Actions],
  storeLeadGen: function(text) {
    //posted ingredient to the SERVER
    HTTP.post('/leadgen', {text, text})
      .then(function(data) {
        console.log("ADDED LEADGEN");
      });
  //  this.fireUpdate();
  },
  //refresh function
  fireUpdate: function() {
  //  this.trigger('change', this.ingredients);
  }
});

module.exports = LeadGenStore;

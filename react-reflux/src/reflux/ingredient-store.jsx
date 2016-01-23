var HTTP = require('../services/httpservice');
var Reflux = require('reflux');
var Actions = require('./action.jsx');

var IngredientStore = Reflux.createStore({
  listenables: [Actions],
  getIngredients: function() {
    HTTP.get('/ingredients')
    .then(function(data) {
        this.ingredients = data;
        //now fire a trigger so that view components are refreshed
        this.fireUpdate();
    }.bind(this));
  },
  postIngredient: function(text) {
    //posted ingredient to the SERVER
    this.ingredients.push({text, text});

    HTTP.post('/ingredients', {text, text})
      .then(function(data) {
        this.getIngredients();
      });
    this.fireUpdate();
  },
  //refresh function
  fireUpdate: function() {
    this.trigger('change', this.ingredients);
  }
});

module.exports = IngredientStore;

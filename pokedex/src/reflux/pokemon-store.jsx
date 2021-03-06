var HTTP = require('../services/httpservice');
var Reflux = require('reflux');
var Actions = require('./action.jsx');

var PokemonStore = Reflux.createStore({
  listenables: [Actions],
  getPokemons: function() {

    this.pokemons = [];

    HTTP.get('/api/v1/pokedex/1')
    .then(function(data) {
      var pokemonData = data.pokemon.map(function(pokemon) {
          HTTP.get(pokemon.resource_uri)
          .then(function(data) {
              var pokemonEntry = {"id": data.pkdx_id, "name": data.name};
              this.pokemons.push(pokemonEntry);
              this.fireUpdate();
          }.bind(this));
      }.bind(this));


      //  this.pokemons = pokemonsData;
        //now fire a trigger so that view components are refreshed
    }.bind(this));
  },
  getPokemonDetail: function(pokemonID) {


    HTTP.get('/api/v1/pokemon/' + pokemonID)
    .then(function(data) {
      console.log(data);
      this.pokemonDetail = data;
      this.trigger('change', this.pokemonDetail);
    }.bind(this));
  },
  //refresh function
  fireUpdate: function() {
    this.trigger('change', this.pokemons);
  },
});

module.exports = PokemonStore;

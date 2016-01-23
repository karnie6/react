var React = require('react');
var Reflux = require('reflux');

var Actions = Reflux.createActions(['getPokemons', 'surpriseMe', 'getPokemonDetail']);

module.exports = Actions;

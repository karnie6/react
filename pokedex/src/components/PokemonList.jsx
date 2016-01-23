var React = require('react');
//var PokemonDetail = require('./PokemonDetail.jsx');
var Reflux = require('reflux');
var Actions = require('../reflux/action.jsx');
var PokemonStore = require('../reflux/pokemon-store.jsx');

var PokemonList = React.createClass({
    mixins:[Reflux.listenTo(PokemonStore, 'onChange')],
    getInitialState: function() {
        return {pokemons:[]};
    },
    componentWillMount: function() {
      Actions.getPokemons();
    },
    onChange: function(event, data) {
      console.log("ON change!");
      this.setState({pokemons: data});
    },
    render: function() {

      var listItems = this.state.pokemons.map(function(pokemon) {
          var hrefString = "/#/pokemon/" + pokemon.id;
          return <div><a href={hrefString}>{pokemon.name}</a></div>;
      });

      return (<div>{listItems}</div>);
    }
});

module.exports = PokemonList;

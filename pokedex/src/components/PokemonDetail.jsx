var React = require('react');
//var PokemonDetail = require('./PokemonDetail.jsx');
var Reflux = require('reflux');
var Actions = require('../reflux/action.jsx');
var PokemonStore = require('../reflux/pokemon-store.jsx');

var PokemonDetail = React.createClass({
    mixins:[Reflux.listenTo(PokemonStore, 'onChange')],
    getInitialState: function() {
        return {pokemonDetail:{}};
    },
    componentWillMount: function() {
      Actions.getPokemonDetail(this.props.params.pokemonId);
    },
    onChange: function(event, data) {
      console.log("ON change!");
      this.setState({pokemonDetail: data});
    },
    render: function() {

      return (<div>{this.state.pokemonDetail.name} - {this.state.pokemonDetail.speed}</div>);
    }
});

module.exports = PokemonDetail;

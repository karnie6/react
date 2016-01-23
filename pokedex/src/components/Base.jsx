var React = require('react');

var Base = React.createClass({
  render: function() {
    return (<div id="base">
    <a href="/#/pokemons">Pokemons</a>
      {this.props.children}

      </div>);
  }
});

module.exports = Base;

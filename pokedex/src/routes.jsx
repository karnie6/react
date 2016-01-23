var React = require('react');
var ReactRouter = require('react-router');

var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var browserHistory = ReactRouter.browserHistory;

var PokemonList = require('./components/PokemonList.jsx');
var PokemonDetail = require('./components/PokemonDetail.jsx');
var Base = require('./components/Base.jsx');

var Routes = (
  <Router history={browserHistory}>
    <Route path="/" component={Base}>
      <Route path="/pokemons" component={PokemonList}/>
      <Route path="/pokemon/:pokemonId" component={PokemonDetail}/>
    </Route>
  </Router>

);


//var Routes = (
//<Router>
//</Router>

//  <Router history={browserHistory}>
//  <Route path="/" component={Base}></R

//  </Route>
//  </Router>
//);


module.exports = Routes;

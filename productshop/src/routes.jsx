var React = require('react');
var ReactRouter = require('react-router');

var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;

var browserHistory = ReactRouter.browserHistory;

var CreateHistory = require('history/lib/createHashHistory');

var History = new CreateHistory({
  queryKey: false
});

var BasePage = require('./components/BasePage.jsx');
var HomePage = require('./components/HomePage.jsx');
var ProductPage = require('./components/ProductPage.jsx');


var Routes = (
  <Router history={History}>
    <Route path="/" component={BasePage} >
     <IndexRoute component={HomePage} />
     <Route path="/product/:productId" component={ProductPage} />
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

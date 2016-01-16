var React = require('react');
var ReactRouter = require('react-router');

var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var browserHistory = ReactRouter.browserHistory;

var Base = require('./components/Base.jsx');
var News = require('./components/News.jsx');
var Photos = require('./components/Photos.jsx');
var Page1 = require('./components/Page1.jsx');

var Routes = (
  <Router >
    <Route path="/" component={Base} >
      <Route path="/news" component={News}/>
      <Route path="/photos" component={Photos}/>

      <Route path="/page1" component={Page1} />
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

var React = require("react");
var ReactDOM = require('react-dom');

//var Router = require("react-router");

var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;

var routes = require("./config/routes");

//var createBrowserHistory = require("react-router/node_modules/history/lib/createBrowserHistory");
//var history = createBrowserHistory();

var history = require("react-router/lib/browserHistory");

ReactDOM.render(<Router history={history}>{routes}</Router>, document.getElementById("app"))
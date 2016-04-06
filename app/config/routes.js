var React = require('react');
var Main = require('../components/Main');
var Home = require('../components/Home');
var Router = require('react-router');
var Route = Router.Route;
var Profile = require('../components/Profile');

module.exports = (
    <Route component={Main}>    
        <Route path="profile/:username" component={Profile} />
        <Route path="/" component={Home} />    
    </Route>
)
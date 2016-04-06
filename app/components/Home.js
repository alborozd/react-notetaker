var React = require('react');
var Link = require("react-router").Link;

var Home = React.createClass({
   render: function() {
       return (
         <h1 className="text-center">            
            {/*<Link to="profile/me">to me</Link>*/}
         </h1>  
       );
   } 
});

module.exports = Home;
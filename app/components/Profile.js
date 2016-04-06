var React = require('react');
var Router = require('react-router');
var UserProfile = require('./Github/UserProfile');
var Repos = require('./Github/Repos');
var Notes = require('./Notes/Notes');

var Profile = React.createClass({
    mixins: [Router.State],
    getInitialState: function() {
      return {
          notes: ["note1"],
          bio: {name: "Alexander"},
          repos: [1, 2, 3]
      }
    },
    render: function() {
        var username = this.props.params.username;
        return (
          <div className="row">
            <div className="col-md-4">
                <UserProfile username={username} bio={this.state.bio}/>
            </div>
            <div className="col-md-4">
                <Repos username={username} repos={this.state.repos}/>
            </div>
            <div className="col-md-4">
                <Notes username={username} notes={this.state.notes} />
            </div>
          </div>  
        );
    }
});

module.exports = Profile;
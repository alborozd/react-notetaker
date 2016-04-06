var React = require('react');
var Router = require('react-router');
var UserProfile = require('./Github/UserProfile');
var Repos = require('./Github/Repos');
var Notes = require('./Notes/Notes');
var ReactFireMixin = require('reactfire');
var Firebase = require("firebase");

var Profile = React.createClass({
    mixins: [Router.State, ReactFireMixin],
    getInitialState: function() {
      return {
          notes: [],
          bio: {name: "Alexander"},
          repos: [1, 2, 3]
      }
    },
    componentDidMount: function() {
        this.ref = new Firebase("https://shining-torch-4902.firebaseio.com/");
        var childRef = this.ref.child(this.props.params.username);
        this.bindAsArray(childRef, "notes");
    },
    componentWillUnmount: function() {        
        this.ref.off();
    },
    handleAddNote: function(newNote) {        
        this.ref.child(this.props.params.username).push().set(newNote);
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
                <Notes 
                    username={username} 
                    notes={this.state.notes} 
                    addNote={this.handleAddNote} />
            </div>
          </div>  
        );
    }
});

module.exports = Profile;
var React = require('react');
var Router = require('react-router');
var UserProfile = require('./Github/UserProfile').default;
var Repos = require('./Github/Repos').default;
import Notes from './Notes/Notes';
var ReactFireMixin = require('reactfire');
var Firebase = require("firebase");
import helpers from "../utils/helpers";

var Profile = React.createClass({
    mixins: [Router.State, ReactFireMixin],
    getInitialState: function() {
      return {
          notes: [],
          bio: {},
          repos: []
      }
    },
    init: function(username) {
        var childRef = this.ref.child(username);
        this.bindAsArray(childRef, "notes");
        
         helpers.getGithubInfo(username)
            .then(function(dataObj) {
               this.setState({
                   bio: dataObj.bio,
                   repos: dataObj.repos
               }) 
            }.bind(this));
    },
    componentDidMount: function() {
        this.ref = new Firebase("https://shining-torch-4902.firebaseio.com/");       
        this.init(this.props.params.username);     
    },
    componentWillUnmount: function() {        
        this.ref.off();
    },
    componentWillReceiveProps: function(nexProps) {        
        this.unbind("notes")
        this.init(nexProps.params.username);
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
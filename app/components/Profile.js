import React from 'react';
//var Router = require('react-router');
import UserProfile from './Github/UserProfile';
import Repos from './Github/Repos';
import Notes from './Notes/Notes';
//var ReactFireMixin = require('reactfire');
//import Firebase from "firebase";

import Rebase from "re-base";

var base = Rebase.createClass("https://shining-torch-4902.firebaseio.com/");


import helpers from "../utils/helpers";

class Profile extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            notes: [],
            bio: {},
            repos: []
        };
    }
       
    init(username) {       
        this.ref = base.bindToState(username, {
            context: this,
            asArray: true,
            state: "notes"
        });
        
         helpers.getGithubInfo(username)
            .then((dataObj) => {
               this.setState({
                   bio: dataObj.bio,
                   repos: dataObj.repos
               }) 
            });
    }
    
    componentDidMount() {               
        this.init(this.props.params.username);     
    }
    
    componentWillUnmount() {        
       base.removeBinding(this.ref);
    }
    
    componentWillReceiveProps(nexProps) {        
       base.removeBinding(this.ref);
       this.init(nexProps.params.username);
    }
        
    handleAddNote(newNote) {        
       base.post(this.props.params.username, {
          data: this.state.notes.concat([newNote]) 
       });
    }
    
    render() {
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
                    addNote={this.handleAddNote.bind(this)} />
            </div>
          </div>  
        );
    }
};

export default Profile;
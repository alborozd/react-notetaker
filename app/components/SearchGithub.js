var React = require('react');
var Router = require("react-router");
var history = require("react-router/lib/browserHistory");

var SearchGithub = React.createClass({
    mixins: [Router.Navigation],
    handleSubmit: function(event) {
      var username = this.refs.username.value;
      this.refs.username.value = "";
      //history.push('profile/' + username);
      history.push('profile/' + username);
      event.preventDefault();
      //this.transitionTo("");  
    },
    render: function() {
        return (
          <div className="col-sm-12">
            <form onSubmit={this.handleSubmit}>
                <div className="form-group col-sm-7">
                    <input type="text" className="form-control" ref="username"/>
                </div>
                <div className="form-group col-sm-5">
                    <button type="submit" className="btn btn-block btn-primary">
                        Search Github
                    </button>
                </div>
            </form>
          </div>  
        );
    }
});

module.exports = SearchGithub;
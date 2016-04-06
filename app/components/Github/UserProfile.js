var React = require('react');

var UserProfiles = React.createClass({
    propTypes: {
        username: React.PropTypes.string.isRequired,
        bio: React.PropTypes.object.isRequired
    },
    render: function() {
        return (
            <div>
                UserProfiles <br />
                Username: {this.props.username} <br />
                Bio: {this.props.bio.name}
            </div>
        )
    }
});

module.exports = UserProfiles;
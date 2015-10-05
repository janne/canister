var React = require('react');

var Account = React.createClass({
  render: function() {
    var address = this.props.address;
    return (<div>{address}</div>);
  }
});

module.exports = Account;

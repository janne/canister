var React = require('react');
require('web3');

var App = React.createClass({
  render: function() {
    var version = web3.version.api;
    return (
      <div>Web3 version: {version}</div>
    );
  }
});

module.exports = App;

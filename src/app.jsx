var React = require('react');
var Account = require('./account.jsx');
require('web3');

var App = React.createClass({
  render: function() {
    var version = web3.version.api;
    web3.setProvider(new web3.providers.HttpProvider('http://localhost:8545'));
    var accounts = web3.eth.accounts.map(function(a){ return <Account address={a} /> });
    return (
      <div>
        <div>Web3 version: {version}</div>
        <div>Accounts: {accounts}</div>
      </div>
    );
  }
});

module.exports = App;

var React = require('react');
var web3 = require('web3');

var Account = React.createClass({
  getInitialState: function() {
    return {
      isCoinbase: (this.props.address == web3.eth.coinbase),
      balance: web3.eth.getBalance(this.props.address)
    }
  },
  render: function() {
    var addr = this.state.isCoinbase ? <b>{this.props.address}</b> : <span>{this.props.address}</span>
    var balance = this.state.balance;
    return (<div>{addr}: {balance}</div>)
  }
});

module.exports = Account;

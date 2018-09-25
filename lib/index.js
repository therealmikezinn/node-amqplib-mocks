const sinon = require('sinon');

exports = module.exports = function connect(){
  this.connections = {};

  this.connect = sinon.stub().callsFake(url => {
    this.connections[url] = new exports.Connection();

    return Promise.resolve(this.connections[url]);
  });
};

exports.Channel = require('./channel');

exports.Connection = require('./connection');

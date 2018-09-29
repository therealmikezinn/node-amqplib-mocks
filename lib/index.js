const sinon = require('sinon');

const mock = {
  connect: sinon.stub().callsFake(url => {
    return Promise.resolve(new mock.Connection(url));
  }),
  Channel: require('./channel'),
  Connection: require('./connection'),
};

module.exports = mock;

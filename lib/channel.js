const sinon = require('sinon');

class Channel {
  constructor(){
    this.ack = sinon.stub();
    this.ackAll = sinon.stub();
    this.nack = sinon.stub();
    this.nackAll = sinon.stub();
    this.reject = sinon.stub();
    this.prefetch = sinon.stub();
    this.recover = sinon.stub();

    this.close = sinon.stub().callsFake( _ => {
      return Promise.resolve();
    });

    this.assertQueue = sinon.stub().callsFake((queue, options) => {
      return Promise.resolve({
        queue: queue || 'test',
        messageCount: 0,
        consumerCount: 0
      });
    });

    this.checkQueue = sinon.stub().callsFake(queue => {
      return Promise.resolve({
        queue: queue || 'test',
        messageCount: 0,
        consumerCount: 0
      });
    });

    this.deleteQueue = sinon.stub().callsFake(queue => {
      return Promise.resolve({
        messageCount: 0,
      });
    });

    this.purgeQueue = sinon.stub().callsFake(queue => {
      return Promise.resolve({
        messageCount: 0,
      });
    });

    this.bindQueue = sinon.stub().callsFake((queue, source, pattern, args) => {
      return Promise.resolve();
    });

    this.unbindQueue = sinon.stub().callsFake((queue, source, pattern, args) => {
      return Promise.resolve();
    });

    this.assertExchange = sinon.stub().callsFake((exchange, type, options) => {
      return Promise.resolve(exchange);
    });

    this.checkExchange = sinon.stub().callsFake(exchange => {
      return Promise.resolve(exchange);
    });

    this.deleteExchange = sinon.stub().callsFake((exchange, options) => {
      return Promise.resolve();
    });

    this.bindExchange = sinon.stub().callsFake((destination, source, pattern, args) => {
      return Promise.resolve();
    });

    this.unbindExchange = sinon.stub().callsFake((destination, source, pattern, args) => {
      return Promise.resolve();
    });

    this.publish = sinon.stub().callsFake((exchange, routingKey, content, options) => {
      return Promise.resolve();
    });

    this.sendToQueue = sinon.stub().callsFake((exchange, content, options) => {
      return Promise.resolve();
    });

    this.sendToQueue = sinon.stub().callsFake((queue, fn, options) => {
      return Promise.resolve();
    });

    this.consume = sinon.stub().callsFake(() => {
      return Promise.resolve();
    });
  }
}

module.exports = Channel;

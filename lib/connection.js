const Channel = require('./channel');

const sinon = require('sinon');

class Connection {
  constructor(){
    this.channels = [];
    this.createChannel = sinon.stub().callsFake( _ => {
      const channel = new Channel(this);
      this.channels.push(channel);
      return Promise.resolve(channel);
    });
  }

  getChannel(index){
    return this.channels[index];
  }
}

module.exports = Connection;

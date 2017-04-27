
const Emitter = require('component-emitter');

/**
 * Packet types (see https://github.com/socketio/socket.io-protocol)
 */

const TYPES = {
  CONNECT: 0,
  DISCONNECT: 1,
  EVENT: 2,
  ACK: 3,
  ERROR: 4,
  BINARY_EVENT: 5,
  BINARY_ACK: 6
};

const errorPacket = {
  type: TYPES.ERROR,
  data: 'parser error'
};

class Encoder {
  encode (packet, callback) {
    return callback([ JSON.stringify(packet) ]);
  }
}

class Decoder extends Emitter {
  add (obj) {
    try {
      let decoded = JSON.parse(obj);
      this.emit('decoded', decoded);
    } catch (e) {
      this.emit('decoded', errorPacket);
    }
  }
  destroy () {}
}

exports.Encoder = Encoder;
exports.Decoder = Decoder;

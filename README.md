
# socket.io-json-parser

An alternative to the default [socket.io-parser](https://github.com/socketio/socket.io-parser), encoding and decoding packets with `JSON.parse / stringify`.

With that parser, binary data (ArrayBuffer / Buffer / Blob / File) is not supported.

Please note that you MUST use the parser on both sides (server & client).

See also:

- the default parser: https://github.com/socketio/socket.io-parser
- a parser based on msgpack: https://github.com/darrachequesne/socket.io-msgpack-parser

## Usage

```js
const io = require('socket.io');
const ioc = require('socket.io-client');
const customParser = require('socket.io-json-parser');

const server = io(PORT, {
  parser: customParser
});

const socket = ioc('ws://localhost:' + PORT, {
  parser: customParser
});

socket.on('connect', () => {
  socket.emit('hello');
});
```

## Format

`socket.emit('hello', 'you')` will create the following packet:

```json
{
  "type": 2,
  "nsp": "/",
  "data": ["hello", "you"]
}
```

which will be encoded by the parser as:

`{"type":2,"nsp":"/","data":["hello","you"]}`

More information about the exchange protocol can be found [here](https://github.com/socketio/socket.io-protocol).

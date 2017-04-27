
# socket.io-json-parser

An alternative to the default [socket.io-parser](https://github.com/socketio/socket.io-parser), encoding and decoding packets with `JSON.parse / stringify`.

With that parser, binary data (ArrayBuffer / Buffer / Blob / File) is not supported.

## Usage

```js
const io = require('socket.io');
const ioc = require('socket.io-client');
const customParser = require('socket.io-json-parser');

let server = io(PORT, {
  parser: customParser
});

let client = ioc('ws://localhost:' + PORT, {
  parser: customParser
});

client.on('connect', () => {
  client.emit('hello');
});
```

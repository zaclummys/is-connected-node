# is-connected-node

> DOM &mdash; Living Standard [`Node.prototype.isConnected()`](https://dom.spec.whatwg.org/#dom-node-isconnected) [ponyfill](https://ponyfill.com)

## Install

```bash
$ npm install --save is-connected-node
```

## Usage
- Ponyfill `isConnected(node: Node)`

```js
const isConnected = require('is-connected-node');
```

- Polyfill `Node.prototype.isConnected(this: Node)`

```js
require('is-connected-node/implement');
```

## License

MIT © Isaac Ferreira <zaclummys@gmail.com>

const isConnected = require('./index');
const isImplemented = require('./is-implemented');

if (false === isImplemented()) {
    Object.defineProperty(Node.prototype, 'isConnected', {
        configurable: true,
        enumerable: true,
        get: function () {
            return isConnected(this);
        },
    });
}

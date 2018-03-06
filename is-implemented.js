module.exports = function isImplemented () {
    return Object.prototype.hasOwnProperty.call(Node.prototype, 'isConnected');
};

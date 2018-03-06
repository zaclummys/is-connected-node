const getRootNode = require('get-root-node-polyfill');

function isDocumentNode (node) {
    return node.nodeType === 9; // Node.DOCUMENT_NODE
}

module.exports = function isConnected (node) {
    const root = getRootNode.call(node, { composed: true });

    return isDocumentNode(root);
};

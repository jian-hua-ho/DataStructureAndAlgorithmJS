let _insertNode = (node, newNode) => {
    if (newNode.key === node.key) {
        throw 'Node Already Exist';    
    }

    if (newNode.key < node.key) {
        if (node.left === null) {
            node.left = newNode;
        } else {
            _insertNode(node.left, newNode);
        }
    } else {
        if (node.right === null) {
            node.right = newNode;
        } else {
            _insertNode(node.right, newNode);
        }
    }
}

let _inOrderTraverseNode = (node, callback) => {
    if (node !== null) {
        _inOrderTraverseNode(node.left, callback);
        callback(node.key);
        _inOrderTraverseNode(node.right, callback);
    }
}

let _preOrderTraverseNode = (node, callback) => {
    if (node !== null) {
        callback(node.key);
        _preOrderTraverseNode(node.left, callback);
        _preOrderTraverseNode(node.right, callback);
    }
}

let _postOrderTraverseNode = (node, callback) => {
    if (node !== null) {
        _postOrderTraverseNode(node.left, callback);
        _postOrderTraverseNode(node.right, callback);
        callback(node.key);
    }
}

let _minNode = (node) => {
    if (!node) {
        return null;
    }

    while (node && node.left !== null) {
        node = node.left;
    }

    return node.key;
}

let _maxNode = (node) => {
    if (!node) {
        return null;
    }

    while (node && node.right !== null) {
        node = node.right;
    }

    return node.key;
}

let _searchNode = (node, key) => {
    if (node === null) {
        return false;
    }

    if (key < node.key) {
        return _searchNode(node.left, key);
    } else if (key > node.key) {
        return _searchNode(node.right, key);
    } else {
        return true;
    }
}

let _removeNode = (node, key) => {
    if (node === null) {
        return null;
    }

    if (key < node.key) {
        node.left = _removeNode(node.left, key);
        return node;
    } else if (key > node.key) {
        node.right = _removeNode(node.right, key);
        return node;
    } else {
        if (node.left === null && node.pight === null) {
            node = null;
            return node;
        }

        if (node.left === null) {
            node = node.right;
            return node;
        } else if (node.right === null) {
            node = node.left;
            return node;
        }

        let aux = _findMinNode(node.right);
        node.key = aux.key;
        node.right = removeNode(node.right, aux.key);
        return node;
    }
}

let _findMinNode = (node) => {
    if (!node) {
        return null;
    }

    while (node && node.left !== null) {
        node = node.left;
    }

    return node;
}

class BinarySearchTree {
    constructor() {
        this._root = null;
    }

    insert(key) {
        let that = this;
        let newNode = new Node(key);

        if (that._root === null) {
            that._root = newNode;
        } else {
            _insertNode(that._root, newNode);
        }
    }

    search(key) {
        let that = this;
        return _searchNode(that._root, key);
    }

    inOrderTraverse(callback) {
        let that = this;
        _inOrderTraverseNode(that._root, callback);
    }

    preOrderTraverse(callback) {
        let that = this;
        _preOrderTraverseNode(that._root, callback);
    }

    postOrderTraverse(callback) {
        let that = this;
        _postOrderTraverseNode(that._root, callback);
    }

    min() {
        let that = this;
        return _minNode(that._root);
    }

    max() {
        let that = this;
        return _maxNode(that._root);
    }

    remove(key) {
        let that = this;
        that._root = _removeNode(that._root, key);
    }
}

class Node {
    constructor(key) {
        this.key = key;
        this.left = null;
        this.right = null;
    }
}

export default BinarySearchTree

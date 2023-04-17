const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class Node {
  constructor(value) {
    this.data = value;
    this.left = null;
    this.right = null;
    this.mainRoot = null;
  }
}
class BinarySearchTree {
  constructor() {
    this.mainRoot = null;
  }

  root() {
    return this.mainRoot
  }

  add(value) {
    let newNode = new Node(value)
    if (!this.mainRoot) {
      this.mainRoot = newNode;
      return;
    }
    let currentNode = this.mainRoot;
    while (currentNode) {
      if (newNode.data < currentNode.data) {
        if (!currentNode.left) {
          currentNode.left = newNode;
          return
        }
        currentNode = currentNode.left
      } else {
        if (!currentNode.right) {
          currentNode.right = newNode;
          return
        }
        currentNode = currentNode.right
      }
    }
  }

  has(value) {
    if (!this.mainRoot) {
      return false;
    }
    let currentNode = this.mainRoot;
    while (currentNode) {
      if (value < currentNode.data) {
        if (!currentNode.left) {
          return false;
        }
        currentNode = currentNode.left
      } else if (value > currentNode.data) {
        if (!currentNode.right) {
          return false;
        }
        currentNode = currentNode.right
      } else {
        return true
      }
    }
  }

  find(value) {
    let current = this.mainRoot;
    while (current && current.data != value) {
      if (value < current.data) {
        current = current.left;
      } else {
        current = current.right;
      }
    }
    return current;
  }

  remove(value) {
    function removeNode(node, value) {
      if (!node) {
        return null;
      } else {
        if (node.data > value) {
          node.left = removeNode(node.left, value);
          return node;
        } else if (node.data < value) {
          node.right = removeNode(node.right, value);
          return node;
        } else {
          if (!node.left && !node.right) {
            return null;
          }
          else if (!node.right) {
            return node.left;
          }
          else if (!node.left) {
            return node.right;
          }

        }
        let minN = node.right;
        while (minN.left) {
          minN = minN.left;
        }
        node.data = minN.data;
        node.right = removeNode(node.right, minN.data);
        return node;
      }
    }
    this.mainRoot = removeNode(this.mainRoot, value);
  }

  min() {
    if (!this.mainRoot) {
      return null;
    }

    let min = this.mainRoot;
    while (min.left) {
      min = min.left;
    }
    return min.data;
  }

  max() {
    if (!this.mainRoot) {
      return;
    }

    let node = this.mainRoot;

    while (node.right) {
      node = node.right;
    }

    return node.data;
  }
}


module.exports = {
  BinarySearchTree
};
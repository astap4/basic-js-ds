const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class Node {
  constructor(data) {
    this.data = data; 
    this.left = null; 
    this.right = null; 
  }
}
class BinarySearchTree {
  constructor(){
    this.root = null;
  }
  root() {
    return this.root
  }

  add(data) {
    let newNode = new Node(data)
    if(!this.root) {
      this.root = newNode;
      return;
    }
    let currentNode = this.root;
    while(currentNode) {
      if(newNode.data < currentNode.data) {
        if(!currentNode.left) {
          currentNode.left = newNode;
          return
        }
        currentNode = currentNode.left
      } else {
        if(!currentNode.right) {
          currentNode.right = newNode;
          return
        }
        currentNode = currentNode.right
      }
    }
  }

  has(data) {
    node = this.root
    while(true){
    if(node === null)
      return false;
    else if(data < node.data){
      node = node.left;
    }
    else if(data > node.data){
      node = node.right;
    }
    else
      return true;
    }
  }

  find(data) {
    let current = this.tree;
    while (current.data != data) {
      if (data < current.data) {
        current = current.left;
      } else {
        current = current.right;
      }
      if (current == null) {
        return null
      }
    }
    return current;
  }

  remove(data) {
    function removeNode(node, data) {
      if (!node) {
        return null;
      } else {
        if (node.data > data) {
          node.left = removeNode(node.left, data);
          return node;
        } else if (node.data < data) {
          node.right = removeNode(node.right, data);
          return node;
        } else {
          if (!node.left && !node.right) {
            return null;
          }
          else if (!node.right) {
            return node.left;}
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
    this.rootNode = removeNode(this.rootNode, data);
  }

  min() {
    if (!this.root) {
      return null;
    }

    let min = this.root;
    while (min.left) {
      min = min.left;
    }
    return min.data;
  }

  max() {
    if (!this.root) {
      return;
    }

    let node = this.root;

    while (node.right) {
      node = node.right;
    }

    return node.data;
  }
  }


module.exports = {
  BinarySearchTree
};
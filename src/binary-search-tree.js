const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class Node{
  constructor(data){
    this.data = data;
    this.left = null;
    this.right = null;
    this.parent = null;
  }
}

class BinarySearchTree {

  constructor(){
    this.rootTree = null;
  }

  root() {
    return this.rootTree
  }

  add(data) {
    const node = new Node(data);
    if (this.rootTree === null) {
      this.rootTree = node;
    } 
    else {
      let currentNode = this.rootTree;
      let parent;
      while (true) {
        if (data < currentNode.data) {
          parent = currentNode;
          currentNode = currentNode.left
          if (currentNode === null) {
            parent.left = node;
            node.parent = parent;
            break;
          }
        } 
        else {
          parent = currentNode;
          currentNode = currentNode.right
          if (currentNode === null) {
            parent.right = node;
            node.parent = parent;
            break
          }
        }
      }
    }
  }

  has(data) {
    let currentNode = this.rootTree;
    while (currentNode !== null){
      if (currentNode.data === data) 
        return true;
      else if (data < currentNode.data)
        currentNode = currentNode.left;
      else currentNode = currentNode.right;
    }
    return false;
}

  find(data) {
    let currentNode = this.rootTree;
    while (currentNode !== null){
      if (currentNode.data === data) 
        return currentNode;
      else if (data < currentNode.data)
        currentNode = currentNode.left;
      else currentNode = currentNode.right;
    }
    return null;
  }

  remove(data) {
    this.rootTree = removeNode(this.rootTree, data)
    
    function removeNode(currentNode, data) {
      if (currentNode === null) return null;
      if (data === currentNode.data) {
        if (currentNode.left === null && currentNode.right === null) {
          return null
        }
        if (currentNode.left === null) {
          return currentNode.right
        }
        if (currentNode.right === null) {
          return currentNode.left
        }
        let bufNode = findMinNode(currentNode.right)
        currentNode.data = bufNode.data
        currentNode.right = removeNode(currentNode.right, bufNode.data)
        return currentNode
      } else if (data > currentNode.data) {
        currentNode.right = removeNode(currentNode.right, data)
        return currentNode
      } else {
        currentNode.left = removeNode(currentNode.left, data)
        return currentNode
      }
  }

  function findMinNode(currentNode){
    if(currentNode){
      while(currentNode.left !== null){
        currentNode= currentNode.left
      }
      return currentNode;
    }
    return null;
  }
}

  min() {
    let currentNode = this.rootTree;
    while (currentNode.left !== null) {
      currentNode = currentNode.left
    }
    return currentNode.data
 }

  max() {
    let currentNode = this.rootTree;
    while (currentNode.right !== null) {
      currentNode = currentNode.right
    }
    return currentNode.data
  }
}

module.exports = {
  BinarySearchTree
};
const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
module.exports = class BinarySearchTree {
constructor(){
this.treeNew = null;
}
  root = () => {
  return this.treeNew;
  }

  add(data) {
    const newNode = new Node(data);
    if(!this.treeNew){
      this.treeNew = newNode;
      return;
    }

    let currentNode = this.treeNew;

    while(currentNode) {
      if(newNode.data < currentNode.data) {
        if (!currentNode.left) {
          currentNode.left = newNode;
          return
        }
        currentNode = currentNode.left;
      } else {
        if (!currentNode.right) {
          currentNode.right = newNode;
          return
        }
        currentNode = currentNode.right;
      }
    }
  }

  has(data){
    return this.find(data) !== null;
}

  find(data) {
    let tree = this.treeNew;
    while (true) {
      if (tree === null) return null;
      if (tree.data === data) return tree;
      if (data > tree.data) {
        tree = tree.right;
      } else {
        tree = tree.left;
      }
    }
    
  }

  remove(/* data */) {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  min() {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  max() {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

}
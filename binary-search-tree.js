class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): insert a new node into the BST with value val.
   * Returns the tree. Uses iteration. */

  insert(val) {
    let newNode = new Node(val);
    if(!this.root) {
      this.root = newNode;
      return this;
    } else {
      let current = this.root;
      while(true){
        if(val === current.val) return undefined;
        if(val < current.val) {
          if(!current.left) {
            current.left = newNode;
            return this;
          } else {
            current = current.left;
          }
        } else if (val > current.val) {
            if(!current.right) {
              current.right = newNode;
              return this;
            } else {
              current = current.right;
            }
        }
      }

    }
    
  }

  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */
  // ??? All tests passing but this: ReferenceError: insertRecursively is not defined


  insertRecursively(val, current = this.root) {
    let newNode = new Node(val);
    if(!this.root) {
      this.root = newNode;
      return this;
    } 
    if(val < current.val) {
      if(!current.left){
        current.left = newNode;
        return this;
      }
      current = insertRecursively(val, current.left);
    } else if(val > current.val) {
      if(!current.right) {
        current.right = newNode;
        return this;
      } 
     current = insertRecursively(val, current.right);
 
    }


  }

  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */

  find(val) {
    if(!this.root) return undefined
    let current = this.root;
    let found = false;
    while(current && !found) {
      if(val < current.val) {
        current = current.left;
      } else if (val > current.val){
        current = current.right;
      } else {
        found = true;
      }
    }
    if(!found) return undefined;
    return current;
  }

  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

  findRecursively(val, current = this.root) {
    if(!this.root) return undefined;
 
    if(val < current.val) {
      if (!current.left) return undefined;
        current = this.findRecursively(val, current.left)
    } else if (val > current.val){
      if (!current.right) return undefined;
        current = this.findRecursively(val, current.right)
    } 
    return current;
  }

  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

  dfsPreOrder() {
    let data = []
    let current = this.root

    function helper(node){
      data.push(node.val)
      if(node.left) helper(node.left);
      if(node.right) helper(node.right);
    }
    helper(current);
    return data;
  }

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

  dfsInOrder() {
    let data = []
    let current = this.root

    function helper(node){
      if(node.left) helper(node.left);
      data.push(node.val)
      if(node.right) helper(node.right);
    }
    helper(current);
    return data;
  }

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  dfsPostOrder() {
    let data = []
    let current = this.root

    function helper(node){
      if(node.left) helper(node.left);
      if(node.right) helper(node.right);
      data.push(node.val)
    }
    helper(current);
    return data;
  }

  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

  bfs() {
    let data = [];
    let queue = [];
    let node = this.root;

    queue.push(node);
    while(queue.length) {
      node = queue.shift();
      data.push(node);
      if(node.left) queue.push(node.left)
      if(node.right) queue.push(node.right)
    }
    return data;
  }

  /** Further Study!
   * remove(val): Removes a node in the BST with the value val.
   * Returns the removed node. */

  remove(val) {

  }

  /** Further Study!
   * isBalanced(): Returns true if the BST is balanced, false otherwise. */

  isBalanced() {

  }

  /** Further Study!
   * findSecondHighest(): Find the second highest value in the BST, if it exists.
   * Otherwise return undefined. */

  findSecondHighest() {
    
  }
}

module.exports = BinarySearchTree;

class Node {
  constructor(val){
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySeachThree {
  constructor(){
    this.root = null;
  }

  insert(val, nodeChecked = this.root){

    if (!nodeChecked) return this.root = new Node(val);
 
    if (nodeChecked.val < val){
      if (!nodeChecked.right){
        nodeChecked.right = new Node(val)
        return this
      } else {
        nodeChecked = nodeChecked.right
        this.insert(val, nodeChecked)
      }

    } else if (nodeChecked.val > val){
      if (!nodeChecked.left){
        nodeChecked.left = new Node(val)
        return this
      } else {
        nodeChecked = nodeChecked.left
        this.insert(val, nodeChecked)
      }
    }

  }

  insertLoop(val){
    
    if (!this.root) return this.root = new Node(val);
    let currentNode = this.root;

    while (currentNode) {
      if (currentNode.val < val){
        if (!currentNode.right){
          currentNode.right = new Node(val);
          return this;
        } else {
          currentNode = currentNode.right;
        }
      } else if (currentNode.val > val){
        if (!currentNode.left){
          currentNode.left = new Node(val);
          return this;
        } else {
          currentNode = currentNode.left;
        }
      }
    }
  }

  exists(value){
    if (!this.root) return false
    let currentNode = this.root

    while(currentNode){
      if (currentNode.val === value) {
        return true
      } else if (value > currentNode.val){
        currentNode = currentNode.right
      } else if (value < currentNode.val){
        currentNode = currentNode.left
      }
    }
    return false
  }





}

let tree = new BinarySeachThree()
let newNode = new Node(10)
tree.root = newNode
tree.root.left = new Node(8)
tree.root.right = new Node(20)

tree.insert(4)
tree.insert(22)
tree.insertLoop(9)
tree.insertLoop(19)




console.log(tree.root)
console.log("-----------")
console.log(tree.exists(22))
console.log(tree.exists(10))
console.log(tree.exists(8))
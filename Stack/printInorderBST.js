/**
 * Created by malavallim on 6/4/16.
 */

function TreeNode (data) {
  this.data = data;
  this.left = null;
  this.right = null;
}

function Tree (dataItems) {
  this.root = null;
  dataItems.forEach((item => { this.insert(item); }).bind(this));
}

Tree.prototype = {
  insert (data) {
    if (!this.root) {
      this.root = new TreeNode(data);
    }
    else {
      var node = this.root;
      while (1) {
        if (data <= node.data) {
          if (node.left) {
            node = node.left;
          }
          else {
            node.left = new TreeNode(data);
            break;
          }
        }
        else {
          if (node.right) {
            node = node.right;
          }
          else {
            node.right = new TreeNode(data);
            break;
          }
        }
      }
    }
  }
};

const printInorderBST = (T) => {
  var stack = [];
  var node = T.root;

  do {
    if (node) {
      stack.push(node);
      node = node.left;
    }
    else {
      node = stack.pop();
      console.log(node.data);
      node = node.right;
    }
  } while (node || stack.length);
};

const main = () => {
  printInorderBST(new Tree(process.argv[2].split(',').map(item => parseInt(item, 10))));
};

main();
/**
 * Created by malavallim on 6/5/16.
 */

function TreeNode (data) {
  this.data = data;
  this.size = 1;
  this.left = null;
  this.right = null;
  this.parent = null;
}

function Tree (dataItems) {
  this.root = null;
  dataItems = dataItems || [];
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
        node.size++;
        if (data <= node.data) {
          if (node.left) {
            node = node.left;
          }
          else {
            node.left = new TreeNode(data);
            node.left.parent = node;
            break;
          }
        }
        else {
          if (node.right) {
            node = node.right;
          }
          else {
            node.right = new TreeNode(data);
            node.right.parent = node;
            break;
          }
        }
      }
    }
  }
};

module.exports = Tree;
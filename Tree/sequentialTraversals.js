/**
 * Created by malavallim on 6/7/16.
 */

const Tree = require('./Utils/tree');

const inorder = T => {
  var stack = [];
  var order = [];
  var node = T.root;

  do {
    if (node) {
      stack.push(node);
      node = node.left;
    }
    else {
      node = stack.pop();
      order.push(node.data);
      node = node.right;
    }
  } while (node || stack.length);

  return order;
};

const preorder = T => {
  var stack = [];
  var order = [];
  var node = T.root;

  do {
    if (node) {
      order.push(node.data);
      if (node.right) {
        stack.push(node.right);
      }
      node = node.left;
    }
    else {
      node = stack.pop();
    }
  } while (node || stack.length);

  return order;
};

const postorder = T => {
  var stack = [];
  var order = [];
  var node = T.root;

  do {
    if (node) {
      order.push(node.data);
      if (node.left) {
        stack.push(node.left);
      }
      node = node.right;
    }
    else {
      node = stack.pop();
    }
  } while (node || stack.length);

  return order.reverse();
};

const main = () => {
  var T = new Tree(process.argv[2].split(',').map(item => parseInt(item, 10)));
  console.log(`Inorder: ${inorder(T)}`);
  console.log(`Preorder: ${preorder(T)}`);
  console.log(`Postorder: ${postorder(T)}`);
};

main();
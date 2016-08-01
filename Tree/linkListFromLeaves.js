/**
 * Created by malavallim on 6/9/16.
 */

const Tree = require('./Utils/tree');

const linkListLeaves = node => {
  var head = null;

  if (node) {
    var left = linkListLeaves(node.left);
    var right = linkListLeaves(node.right);

    head = left;
    while(left && left.right) {
      left = left.right;
    }
    if (left) {
      left.right = right;
    }
    else {
      head = right || node;
    }
  }

  return head;
};

const main = () => {
  var T = new Tree(process.argv[2].split(',').map(item => parseInt(item, 10)));
  var node = linkListLeaves(T.root);
  var list = 'head';

  while (node) {
    list = `${list} --> ${node.data}`;
    node = node.right;
  }
  console.log(`${list} --> null`);
};

main();
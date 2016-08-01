/**
 * Created by malavallim on 6/6/16.
 */

const Tree = require('./Utils/tree');

const inorderWithParentNode = T => {
  var cur = T.root;
  var prev = null;
  var next = null;
  var inorder = [];

  while (cur) {
    if (!prev || prev.left === cur || prev.right === cur) {
      if (cur.left) {
        next = cur.left;
      }
      else {
        inorder.push(cur.data);
        next = cur.right ? cur.right : cur.parent;
      }
    }
    else if (cur.left === prev) {
      inorder.push(cur.data);
      next = cur.right ? cur.right : cur.parent;
    }
    else {
      next = cur.parent;
    }

    prev = cur;
    cur = next;
  }

  return inorder;
};

const main = () => {
  var T = new Tree(process.argv[2].split(',').map(item => parseInt(item, 10)));
  console.log(inorderWithParentNode(T));
};

main();
/**
 * Created by malavallim on 6/6/16.
 */

const Tree = require('./Utils/tree');

const kthInorderNode = (node, k) => {
  if (!node || k <= 0) {
    return null;
  }
  else {
    var leftSize = node.left ? node.left.size : 0;

    if (k === leftSize + 1) {
      return node;
    }
    else if (k < leftSize + 1) {
      return kthInorderNode(node.left, k);
    }
    else {
      return kthInorderNode(node.right, k - leftSize - 1);
    }
  }
};

const main = () => {
  var T = new Tree(process.argv[2].split(',').map(item => parseInt(item, 10)));
  var k = parseInt(process.argv[3], 10);
  var n = kthInorderNode(T.root, k);

  console.log(n ? n.data : null);
};

main();
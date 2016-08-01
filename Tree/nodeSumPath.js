/**
 * Created by malavallim on 6/6/16.
 */

const Tree = require('./Utils/tree');

const nodeSumPath = (node, s) => {
  if (!node) {
    return (s === 0);
  }
  else {
    var s_ = s - node.data;
    return (s_ >= 0 && (nodeSumPath(node.left, s_) || nodeSumPath(node.right, s_)));
  }
};

const main = () => {
  var T = new Tree(process.argv[2].split(',').map(item => parseInt(item, 10)));
  var s = parseInt(process.argv[3], 10);

  console.log(nodeSumPath(T.root, s));
};

main();
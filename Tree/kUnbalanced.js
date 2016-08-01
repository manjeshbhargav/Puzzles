/**
 * Created by malavallim on 6/5/16.
 */

const Tree = require('./Utils/tree');

const kUnbalancedNode = (node, kuNode, k) => {
  if (!node) {
    return 0;
  }
  else if (kuNode.data !== null) {
    return -1;
  }
  else {
    var lnodes = kUnbalancedNode(node.left, kuNode, k);
    var rnodes = kUnbalancedNode(node.right, kuNode, k);
    if (kuNode.data === null && Math.abs(lnodes - rnodes) > k) {
      kuNode.data = node.data;
    }
    return (lnodes + rnodes + 1);
  }
};

const main = () => {
  var T = new Tree(process.argv[2].split(',').map(item => parseInt(item, 10)));
  var k = parseInt(process.argv[3], 10);
  var u = { data: null };

  console.log(kUnbalancedNode(T.root, u, k));
  console.log(u);
};

main();
/**
 * Created by malavallim on 6/5/16.
 */

const Tree = require('./Utils/tree');

const LCA = (node, a, b) => {
  if (!node) {
    return null;
  }
  else if (node.data === a || node.data === b) {
    return node;
  }
  else {
    var nleft = LCA(node.left, a, b);
    var nright = LCA(node.right, a, b);

    if (!nleft || !nright) {
      return nleft || nright;
    }
    if ((nleft.data === a && nright.data === b) ||
        (nright.data === a && nleft.data === b)) {
      return node;
    }
  }
};

const main = () => {
  var T = new Tree(process.argv[2].split(',').map(item => parseInt(item, 10)));
  var a = parseInt(process.argv[3], 10);
  var b = parseInt(process.argv[4], 10);
  var lca = LCA(T.root, a, b);

  console.log(lca ? lca.data : null);
};

main();
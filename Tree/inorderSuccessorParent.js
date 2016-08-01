/**
 * Created by malavallim on 6/8/16.
 */

const Tree = require('./Utils/tree');

const inorderSuccessor = node => {
  var succ = null;

  if (node) {
    if (node.right) {
      succ = node.right;
    }
    else {
      succ = node.parent;
      while (succ && succ.left !== node) {
        node = succ;
        succ = succ.parent;
      }
    }
  }

  return succ;
};

const main = () => {
  var T = new Tree(process.argv[2].split(',').map(item => parseInt(item, 10)));
  var path = process.argv[3].split(',');
  var node = path.reduce((node, dir) => (node ? node[dir] : null), T.root);
  var succ = inorderSuccessor(node);

  console.log(`inorderSuccessor(${node ? node.data : null}): ${succ ? succ.data : null}`);
};

main();
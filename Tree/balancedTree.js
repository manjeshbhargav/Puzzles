/**
 * Created by malavallim on 6/5/16.
 */

const Tree = require('./Utils/tree');

const balancedTree = node => {
  if (!node) {
    return 0;
  }
  else {
    var hleft = balancedTree(node.left);
    var hright = balancedTree(node.right);

    if (hleft == -1 || hright == -1 || Math.abs(hleft - hright) > 1) {
      return -1;
    }
    else {
      return (Math.max(hleft, hright) + 1);
    }
  }
};

const main = () => {
  var T = new Tree(process.argv[2].split(',').map(item => parseInt(item, 10)));
  console.log(balancedTree(T.root));
};

main();
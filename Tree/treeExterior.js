/**
 * Created by malavallim on 6/9/16.
 */

const Tree = require('./Utils/tree');

const exterior = (node, boundary) => {
  if (node) {
    if (!node.left && !node.right) {
      return `${node.data} --> `;
    }
    else {
      return `${boundary ? `${node.data} --> ` : ''}${exterior(node.left, boundary)}${exterior(node.right, boundary && !boundary)}`;
    }
  }
  return '';
};

const exteriorRight = node => {
  if (node && node.right) {
    return `${exteriorRight(node.right)}${node.data} --> `;
  }
  return '';
};

const main = () => {
  var T = new Tree(process.argv[2].split(',').map(item => parseInt(item, 10)));
  console.log(exterior(T.root, true) + exteriorRight(T.root.right) + 'null');
};

main();
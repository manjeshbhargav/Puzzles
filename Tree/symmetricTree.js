/**
 * Created by malavallim on 6/5/16.
 */

const Tree = require('./Utils/tree');

const symmetricSubtrees = (lstRoot, rstRoot) => {
  if (!lstRoot && !rstRoot) {
    return true;
  }
  else if (!lstRoot || !rstRoot) {
    return false;
  }
  else if (lstRoot.data !== rstRoot.data) {
    return false;
  }
  else {
    return symmetricSubtrees(lstRoot.left, rstRoot.right) && symmetricSubtrees(lstRoot.right, rstRoot.left);
  }
};

const symmetricTree = T => {
  return T.root === null || symmetricSubtrees(T.root.left, T.root.right);
};

const main = () => {
  var T = {
    root: {
      data: 314,
      left: {
        data: 6,
        left: null,
        right: {
          data: 2,
          left: null,
          right: {
            data: 3,
            left: null,
            right: null
          }
        }
      },
      right: {
        data: 6,
        left: {
          data: 2,
          left: {
            data: 3,
            left: null,
            right: null
          },
          right: null
        },
        right: null
      }
    }
  };
  console.log(symmetricTree(T));
};

main();
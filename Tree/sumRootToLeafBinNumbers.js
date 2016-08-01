/**
 * Created by malavallim on 6/5/16.
 */

const sumRootToLeafBinNumbers = (node, num) => {
  if (!node) {
    return 0;
  }
  else if (!node.left && !node.right) {
    return (num << 1) | node.data;
  }
  else {
    return sumRootToLeafBinNumbers(node.left, (num << 1) | node.data) +
           sumRootToLeafBinNumbers(node.right, (num << 1) | node.data);
  }
};

const main = () => {
  var root = {
    data: 1,
    left: {
      data: 0,
      left: {
        data: 0,
        left: {
          data: 0,
          left: null,
          right: null
        },
        right: {
          data: 1,
          left: null,
          right: null
        }
      },
      right: {
        data: 1,
        left: null,
        right: {
          data: 1,
          left: {
            data: 0,
            left: null,
            right: null
          },
          right: null
        }
      }
    },
    right: {
      data: 1,
      left: {
        data: 0,
        left: null,
        right: {
          data: 0,
          left: {
            data: 1,
            left: null,
            right: {
              data: 1,
              left: null,
              right: null
            }
          },
          right: {
            data: 0,
            left: null,
            right: null
          }
        }
      },
      right: {
        data: 0,
        left: null,
        right: {
          data: 0,
          left: null,
          right: null
        }
      }
    }
  };

  console.log(sumRootToLeafBinNumbers(root, 0));
};

main();
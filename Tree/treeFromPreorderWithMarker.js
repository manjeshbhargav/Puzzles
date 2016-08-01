/**
 * Created by malavallim on 6/8/16.
 */

const treeWithPreorderWithMarker = P => {
  var root = null;
  var node = null;
  var stack = [];
  var top = s => (s.length ? s[s.length - 1] : null);

  for (var i = 0; i < P.length; i++) {
    node = P[i] === 'null' ? null : { data: P[i], left: null, right: null };
    if (top(stack)) {
      if (top(stack).left) {
        console.log(`${top(stack).data} R--> ${node ? node.data : null}`);
        top(stack).right = node;
        top(stack).left = top(stack).left === 'null' ? null : top(stack).left;
        stack.pop();
      }
      else {
        top(stack).left = node ? node : 'null';
        console.log(`${top(stack).data} L--> ${node ? node.data : null}`);
      }
    }
    if (node) {
      stack.push(node);
      if (i == 0) {
        root = node;
      }
    }
  }

  return root;
};

const main = () => {
  var Pre = process.argv[2].split(',');
  treeWithPreorderWithMarker(Pre);
};

main();
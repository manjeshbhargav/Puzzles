/**
 * Created by malavallim on 6/7/16.
 */

const findPos = (A, l, r, key) => {
  var pos = -1;
  var i = 0;

  for (i = l; i <= r; i++) {
    if (A[i] === key) {
      pos = i;
      break;
    }
  }

  return pos;
};

const treeFromInorderAndPreorder = (In, Pre, lin, rin, lpre, rpre) => {
  if (lin > rin) {
    return null;
  }
  else {
    var pos = findPos(In, lin, rin, Pre[lpre]);
    var node = { data: Pre[lpre], left: null, right: null };

    node.left = treeFromInorderAndPreorder(In, Pre, lin, pos - 1, lpre + 1, lpre + pos - lin);
    node.right = treeFromInorderAndPreorder(In, Pre, pos + 1, rin, lpre + pos - lin + 1, rpre);
    console.log(`${node.data} --> ${node.left ? node.left.data : null} --> ${node.right ? node.right.data : null}`);
    return node;
  }
};

const treeFromInorderAndPostorder = (In, Post, lin, rin, lpost, rpost) => {
  if (lin > rin) {
    return null;
  }
  else {
    var pos = findPos(In, lin, rin, Post[rpost]);
    var node = { data: Post[rpost], left: null, right: null };

    node.left = treeFromInorderAndPostorder(In, Post, lin, pos - 1, lpost, lpost + pos - lin - 1);
    node.right = treeFromInorderAndPostorder(In, Post, pos + 1, rin, lpost + pos - lin, rpost - 1);
    console.log(`${node.data} --> ${node.left ? node.left.data : null} --> ${node.right ? node.right.data : null}`);
    return node;
  }
};

const main = () => {
  var In = process.argv[2].split(',');
  var Pre = process.argv[3].split(',');
  var Post = process.argv[4].split(',');

  treeFromInorderAndPreorder(In, Pre, 0, In.length - 1, 0, Pre.length - 1);
  treeFromInorderAndPostorder(In, Post, 0, In.length - 1, 0, Post.length - 1);
};

main();
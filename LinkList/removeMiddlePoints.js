/**
 * Created by malavallim on 5/9/16.
 */

const makeLinkList = require('./Utils/make-link-list');
const printLinkList = require('./Utils/print-link-list');

const removeMiddleNodes = (node1, node2) => {
  var node = node1.next.next;

  while (node !== node2.next) {
    node1.next = node;
    node = node.next;
  }

  return node1;
};

const findEndOfLine = node => {
  var n = node.next;

  if (n && n.next && node.x === n.next.x) {
    while (n.next && node.x === n.next.x) {
      n = n.next;
    }
  }
  else if (n && n.next && node.y === n.next.y) {
    while (n.next && node.y === n.next.y) {
      n = n.next;
    }
  }

  return n;
};

const removeMiddlePoints = head => {
  var node = head;
  var node1 = null;

  while (node && node.next) {
    node1 = findEndOfLine(node);
    node = removeMiddleNodes(node, node1);
    node = node.next;
  }

  return head;
};

const main = () => {
  var list = makeLinkList([
    [ 0, 10 ], [ 1, 10 ], [ 5, 10 ], [ 7, 10 ],
    [ 7, 7 ],
    [ 7, 6 ],
    [ 7, 5 ], [ 20, 5 ], [ 40, 5 ]
  ]);

  console.log('list:');
  printLinkList(list);

  console.log('removeMiddlePoints:');
  printLinkList(removeMiddlePoints(list));
};

main();
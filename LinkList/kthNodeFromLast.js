/**
 * Created by malavallim on 5/4/16.
 */

const makeLinkList = require('./Utils/make-link-list');
const printLinkList = require('./Utils/print-link-list');

const kthNodeFromLast = (head, k) => {
  var left = head;
  var right = head;

  while (right && k) {
    right = right.next;
    k--;
  }

  if (k) {
    return null;
  }
  else {
    while (right) {
      left = left.next;
      right = right.next;
    }
  }

  return left;
};

const main = () => {
  var list = makeLinkList([ 26, 13, 41, 44, 31, 3, 14, 91, 15, 100, 20, 2, 96, 12, 53, 63, 39, 77/*, 49, 5*/ ]);
  var k = 7;

  console.log('list:');
  printLinkList(list);

  console.log(`kthNodeFromLast(${k}):`);
  printLinkList(kthNodeFromLast(list, k));
};

main();
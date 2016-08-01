/**
 * Created by malavallim on 5/3/16.
 */
const printLinkList = require('./Utils/print-link-list');
const makeLinkList = require('./Utils/make-link-list');

const reverseGroup = (head, k) => {
  if (!head || k <= 1) {
    return head;
  }

  var prev = null;
  var revTail = head;
  var next = head.next;
  var i = 0;

  while (next && i < k) {
    head.next = prev;
    prev = head;
    head = next;
    next = head.next;
    i = i + 1;
  }

  if (!next && i < k) {
    head.next = prev;
    return head;
  }
  else {
    revTail.next = reverseGroup(head, k);
    return prev;
  }
};

const main = () => {
  var list = makeLinkList([ 26, 13, 41, 44, 31, 3, 14, 91, 15, 100, 20, 2, 96, 12, 53, 63, 39, 77/*, 49, 5*/ ]);
  var k = 5;

  console.log('list:');
  printLinkList(list);

  console.log(`reversed(${k}):`);
  printLinkList(reverseGroup(list, k));
};

main();
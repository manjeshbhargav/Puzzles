/**
 * Created by malavallim on 5/4/16.
 */

const makeLinkList = require('./Utils/make-link-list');
const printLinkList = require('./Utils/print-link-list');

const rotateCounterClockwise = (head, k) => {
  var tail = head;

  if (tail) {
    while(tail.next) {
      tail = tail.next;
    }

    while (k--) {
      tail.next = head;
      tail = head;
      head = head.next;
      tail.next = null;
    }
  }

  return head;
};

const main = () => {
  var list = makeLinkList([ 26, 13, 41, 44, 31, 3, 14, 91, 15, 100, 20, 2, 96, 12, 53, 63, 39, 77/*, 49, 5*/ ]);
  var k = 3;

  console.log('list:');
  printLinkList(list);

  console.log(`rotateCounterClockwise(${k}):`);
  printLinkList(rotateCounterClockwise(list, k));
};

main();
/**
 * Created by malavallim on 5/9/16.
 */

const makeLinkList = require('./Utils/make-link-list');
const printLinkList = require('./Utils/print-link-list');

const alternateMerge = (head1, head2) => {
  var a = head1;
  var b = head2;
  var aNext = null;
  var bNext = null;

  while (a || b) {
    if (a) {
      aNext = a.next;
      a.next = b || aNext;
    }
    if (b) {
      bNext = b.next;
      b.next = aNext || bNext;
    }
    a = aNext;
    b = bNext;
  }

  return head1 || head2;
};

const main = () => {
  var list1 = makeLinkList([ 3, 5, 7 ]);
  var list2 = makeLinkList([ 2, 4, 6, 8 ]);

  console.log('list1:');
  printLinkList(list1);

  console.log('list2:');
  printLinkList(list2);

  console.log('altmerge:');
  printLinkList(alternateMerge(list1, list2));

};

main();
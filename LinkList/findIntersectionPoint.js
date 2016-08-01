/**
 * Created by malavallim on 5/5/16.
 */

const makeLinkList = require('./Utils/make-link-list');
const printLinkList = require('./Utils/print-link-list');

const findIntersectionNode = (head1, head2) => {
  if (head1 && head2) {
    var node1 = head1;
    var node2 = head2;

    while (node1.next && node2.next && node1 !== node2) {
      node1 = node1.next;
      node2 = node2.next;
    }

    if (node1 === node2) {
      return node1;
    }
    else {
      var diff = 0;
      var s = node1.next ? node2 : node1;
      var shorter = node1.next ? head2: head1;
      var l = node1.next ? node1 : node2;
      var longer = node1.next ? head1: head2;

      while (l !== s) {
        if (!l) {
          return null;
        }
        diff = diff + 1;
        l = l.next;
      }

      l = longer;
      s = shorter;

      while (diff--) {
        l = l.next;
      }

      return findIntersectionNode(l, s);
    }
  }
  return null;
};

const main = () => {
  var list1 = makeLinkList([ 3, 5, 7 ]);
  var list2 = makeLinkList([ 2, 4, 6, 8 ]);

  list1.next.next.next = list2.next;

  console.log('list1:');
  printLinkList(list1);

  console.log('list2:');
  printLinkList(list2);

  console.log('intersection:');
  printLinkList(findIntersectionNode(list1, list2));
};

main();
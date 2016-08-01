/**
 * Created by malavallim on 6/2/16.
 */

const makeLinkList = require('./Utils/make-link-list');
const printLinkList = require('./Utils/print-link-list');

const evenOddMerge = head => {
  var pos = 0;
  var e = head;
  var o = head.next;

  if (!head || !head.next) {
    return head;
  }

  for (var c = e, n = o; n.next !== null; c = n, n = n.next) {
    c.next = n.next;
    pos++;
  }
  c.next = null;

  if (pos % 2) {
    n.next = o;
  }
  else {
    c.next = o;
  }

  return head;
};

const main = () => {
  var list = makeLinkList(process.argv[2].split(',').map(item => (parseInt(item, 10))));
  printLinkList(evenOddMerge(list));
};

main();

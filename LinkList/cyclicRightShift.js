/**
 * Created by malavallim on 6/2/16.
 */

const makeLinkList = require('./Utils/make-link-list');
const printLinkList = require('./Utils/print-link-list');

const cyclicRightShift = (head, k) => {
  var r = head;
  var l = head;

  for (var i = 1; i <= k; i++) {
    r = r.next || head;
  }

  while (r.next) {
    l = l.next;
    r = r.next;
  }

  r.next = head;
  head = l.next;
  l.next = null;

  return head;
};

const main = () => {
  var list = makeLinkList(process.argv[2].split(',').map(item => (parseInt(item, 10))));
  var k = parseInt(process.argv[3], 10);

  printLinkList(cyclicRightShift(list, k));
};

main();

/**
 * Created by malavallim on 6/2/16.
 */

const makeLinkList = require('./Utils/make-link-list');
const printLinkList = require('./Utils/print-link-list');

const reverseSublist = (head, s, f) => {
  var l = head;
  var lp = null;
  var r = head;
  var rn = (head || {next: null}).next;

  for (var i = 1; i <= f; i++) {
    if (i < s) {
      lp = l;
      l = l.next;
    }
    if (i < f) {
      r = rn;
      rn = rn.next;
    }
  }

  console.log(l.value, r.value);

  var p = l;
  var c = l.next;
  var n = c.next;

  while (c != rn) {
    c.next = p;
    p = c;
    c = n;
    n = (n || {next: null}).next;
  }

  if (lp) {
    lp.next = r;
  }
  l.next = rn;

  return s > 1 ? head : r;
};

const main = () => {
  var list = makeLinkList(process.argv[2].split(',').map(item => (parseInt(item, 10))));
  var s = parseInt(process.argv[3], 10);
  var f = parseInt(process.argv[4], 10);

  printLinkList(reverseSublist(list, s, f));
};

main();

/**
 * Reverse a link list
 */
const printLinkList = require('./Utils/print-link-list');
/**
 * reverse (list) {
 *  if (list.empty()) {
 *    return;
 *  }
 *
 *  prev <-- null;
 *  next <-- list.head()->next;
 *
 *  while (next) {
 *    list.head()->next <-- prev;
 *    prev <-- head;
 *    list.head(next);
 *    next <-- list.head()->next;
 *  }
 *  list.head()->next <-- prev;
 * }
 */
const reverse = head => {
  if (!head) {
    return null;
  }

  var prev = null;
  var next = head.next;

  while (next) {
    head.next = prev;
    prev = head;
    head = next;
    next = head.next;
  }

  head.next = prev;
  return head;
};

const main = () => {
  var arr = [ 10, 15, 25, 4, 3, 6 ];
  var list = { value: 10, next: null };
  var node = list;

  for (var i = 1; i < arr.length; i++) {
    var newNode = { value: arr[i], next: null };
    node.next = newNode;
    node = newNode;
  }

  printLinkList(list);
  list = reverse(list);
  printLinkList(list);
};

main();
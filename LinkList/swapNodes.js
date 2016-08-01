/**
 * Swap two nodes in a link list.
 *
 * swapNodes (list, x, y) {
 *  node(x) <-- Node containing x;
 *  node(y) <-- Node containing y;
 *  prev(x) <-- Node previous to node(x);
 *  prev(y) <-- Node previous to node(y);
 *  next(y) <-- Node next to y;
 *  adj(x, y) <-- !!(node(x)->next == node(y));
 *
 *  if (list.empty() || node(x) == null || node(y) == null) {
 *    exit;
 *  }
 *
 *  if (prev(x)) {
 *    prev(x)->next <-- node(y);
 *  }
 *
 *  if(adj(x, y)) {
 *    node(y)->next <-- node(x);
 *  }
 *  else {
 *    node(y)->next <-- node(x)->next;
 *    prev(y)->next <-- node(x);
 *  }
 *
 *  node(x)->next <-- next(y);
 *
 *  if (list.head() == node(x)) {
 *    list.head() <-- node(y);
 *  }
 * }
 */
const makeLinkList = require('./Utils/make-link-list');
const printLinkList = require('./Utils/print-link-list');

const swapNodes = (head, x, y) => {
  // If empty list, return
  if (head == null) {
    return;
  }
  // Link list iterator
  var node = head;
  // Link list iterator predecessor
  var nodePrev = null;
  // Node containing 'x'
  var nodeX = null;
  // Node containing 'y'
  var nodeY = null;
  // Node previous to 'x'
  var nodeXPrev = null;
  // Node previous to 'y'
  var nodeYPrev = null;
  // Traverse the list to find the nodes
  // containing first occurrences of'x' and 'y'
  while (node && !(nodeX && nodeY)) {
    if (!nodeX && node.value === x) {
      nodeX = node;
      nodeXPrev = nodePrev;
    }
    if (!nodeY && node.value === y) {
      nodeY = node;
      nodeYPrev = nodePrev;
    }
    nodePrev = node;
    node = node.next;
  }
  // If both 'x' and 'y' are not found, then
  // nothing to swap, return
  if (!(nodeX && nodeY)) {
    return;
  }
  // true if 'x' is the previous node of 'y'
  var adjacent = !!(nodeX.next === nodeY);
  // Node next to 'y'
  var nodeYNext = nodeY.next;
  // If 'x' is not head, then set x's previous's next to 'y'
  if (nodeXPrev) {
    nodeXPrev.next = nodeY;
  }
  // If 'x' is adjacent to 'y', then set y's next to 'x'
  if (adjacent) {
    nodeY.next = nodeX;
  }
  // Else, set y's next to x's next and
  // y's previous's next to x
  else {
    nodeY.next = nodeX.next;
    nodeYPrev.next = nodeX;
  }
  // Set x's next to y's next
  nodeX.next = nodeYNext;
  // If 'x' was head, then now 'y' is the new head
  if (nodeX === head) {
    head = nodeY;
  }
  // Return the head node
  return head;
};

const main = () => {
  var arr = process.argv[2].split(',').map(item => parseInt(item, 10));
  var a = parseInt(process.argv[3], 10);
  var b = parseInt(process.argv[4], 10);
  var list = makeLinkList(arr);

  printLinkList(list);
  list = swapNodes(list, a, b);
  printLinkList(list);
};

main();
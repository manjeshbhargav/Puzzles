/**
 * Merge sort for link lists
 */
const makeLinkList = require('./Utils/make-link-list');
const printLinkList = require('./Utils/print-link-list');
/**
 * Merge two sorted lists referenced by
 * head1 and head2 respectively
 * @param head1
 * @param head2
 * @returns {Object}
 */
const mergeSortedLists = (head1, head2) => {
  if (!(head1 || head2)) {
    return null;
  }
  if (!head1) {
    return head2;
  }
  if (!head2) {
    return head1;
  }

  var head = null;
  var lesser = null;
  var greater = null;
  var nextGreater = null;
  /**
   * head <-- Min(head1, head2);
   * lesser <-- Min(head1, head2);
   * greater <-- Max(head1, head2);
   */
  if (head1.value <= head2.value) {
    head = lesser = head1;
    greater = head2;
  }
  else {
    head = lesser = head2;
    greater = head1;
  }
  /**
   * Do until both lists have been fully traversed
   */
  while (greater) {
    /**
     * lesser <-- next(lesser) as long as
     *  [ value(next(lesser)) <= value(greater) ];
     */
    while (lesser.next && lesser.next.value <= greater.value) {
      lesser = lesser.next;
    }
    /**
     * nextGreater <-- next(lesser);
     * next(lesser) <-- greater;
     * lesser <-- greater;
     * greater <-- nextGreater;
     */
    nextGreater = lesser.next;
    lesser.next = greater;
    lesser = greater;
    greater = nextGreater;
  }
  /**
   * Return head of merged list
   */
  return head;
};
/**
 * Find the middle node of a list
 * @param head
 * @returns {Object}
 */
const middleNode = head => {
  var node = null;
  var altNode = null;
  /**
   * Traverse the list using node as the iterator until
   * altNode (which skips one node each time) is null.
   */
  if (head) {
    node = head;
    altNode = (head.next || head).next;
    while (altNode) {
      node = node.next;
      altNode = (altNode.next || altNode).next;
    }
  }
  /**
   * Once altNode is null, node represents the middle
   * node in the list.
   */
  return node;
};
/**
 * Merge sort for link list
 * @param head
 * @returns {Object}
 */
const mergeSort = head => {
  var mid = middleNode(head);
  var midNext;
  var leftHalf;
  var rightHalf;
  /**
   * If the list is empty or has single item,
   * then return the list as it is
   */
  if (!(mid && mid.next)) {
    return head;
  }
  /**
   * Cut the list into two halves:
   * mid <-- middleNode(head);
   * next(mid) <-- null;
   */
  midNext = mid.next;
  mid.next = null;
  /**
   * Sort the left and right halves
   */
  leftHalf = mergeSort(head);
  rightHalf = mergeSort(midNext);
  /**
   * Merge the two sorted halves and return
   * the head of the sorted list
   */
  head = mergeSortedLists(leftHalf, rightHalf);
  return head;
};

const main = () => {
  var list = makeLinkList([ 26, 13, 41, 44, 31, 3, 14, 91, 15, 100, 20, 2, 96, 12, 53, 63, 39, 77, 49, 5 ]);

  console.log('list:');
  printLinkList(list);

  console.log('sorted:');
  printLinkList(mergeSort(list));
};

main();
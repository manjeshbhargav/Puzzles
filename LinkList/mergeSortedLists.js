/**
 * Merge sorted link lists
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

const main = () => {
  var list1 = makeLinkList([ 3, 5, 7 ]);
  var list2 = makeLinkList([ 2, 4, 6, 8 ]);

  console.log('list1:');
  printLinkList(list1);

  console.log('list2:');
  printLinkList(list2);

  console.log('merged:');
  printLinkList(mergeSortedLists(list1, list2));
};

main();
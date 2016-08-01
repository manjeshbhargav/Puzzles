/**
 * Created by malavallim on 5/5/16.
 */
/**
 * Created by malavallim on 5/4/16.
 */

const makeLinkList = require('./Utils/make-link-list');
const printLinkList = require('./Utils/print-link-list');

const printReverseRecursive = head => {
  return head ? `${printReverseRecursive(head.next)}${head.value} --> ` : '';
};

const main = () => {
  var list = makeLinkList([ 26, 13, 41, 44, 31, 3, 14, 91, 15, 100, 20, 2, 96, 12, 53, 63, 39, 77/*, 49, 5*/ ]);

  console.log('list:');
  printLinkList(list);

  console.log(`reverseRecursive:`);
  console.log(`${printReverseRecursive(list)}null`);
};

main();
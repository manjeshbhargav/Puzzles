/**
 * Created by malavallim on 6/17/16.
 */

const Hash = require('./Utils/hash');

const longestUniqueSubArray = A => {
  var hash = new Hash();
  var maxI = 0;
  var maxJ = 0;
  var i = 0;
  var j = 0;

  while (j < A.length) {
    if (hash.has(A[j])) {
      if ((maxJ - maxI) < (j - i)) {
        maxI = i;
        maxJ = j;
      }
      i = hash.get(A[j]) + 1;
    }
    hash.set(A[j], j);
    j++;
  }
  if ((maxJ - maxI) < (j - i)) {
    maxI = i;
    maxJ = j;
  }
  return A.slice(maxI, maxJ);
};

const main = () => {
  console.log(longestUniqueSubArray(process.argv[2].split(',').map(item => parseInt(item, 10))));
};

main();
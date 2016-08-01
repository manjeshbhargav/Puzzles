/**
 * Created by malavallim on 6/17/16.
 */

const Hash = require('./Utils/hash');

const biggestRange = A => {
  var hash = new Hash();
  var range = 1;

  for (var i = 0; i < A.length; i++) {
    if (!hash.has(A[i])) {
      hash.set(A[i], (hash.has(A[i] - 1) ? hash.get(A[i] - 1) : 0) + 1);
      for (var j = A[i] + 1; hash.has(j); j++) {
        hash.set(j, hash.get(j - 1) + 1);
      }
      range = Math.max(range, hash.get(j - 1));
    }
  }
  return range;
};

const main = () => {
  console.log(biggestRange(process.argv[2].split(',').map(item => parseInt(item, 10))));
};

main();
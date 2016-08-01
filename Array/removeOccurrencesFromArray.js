/**
 * Created by malavallim on 5/23/16.
 */

const removeOccurrences = (A, key) => {
  var w = 0;

  for (var i = 0; i < A.length; i++) {
    if (A[i] != key) {
      A[w++] = A[i];
    }
  }
  for (; w < A.length; w++) {
    A[w] = NaN;
  }
  return A;
};

const main = () => {
  var A = process.argv[2].split(',').map(digit => (parseInt(digit, 10)));
  var key = parseInt(process.argv[3], 10);

  console.log(`After removing occurences: [${removeOccurrences(A, key)}]`);
};

main();
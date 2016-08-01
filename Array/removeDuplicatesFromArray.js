/**
 * Created by malavallim on 5/23/16.
 */

const removeDuplicates = A => {
  var w = 0;
  var i = 1;

  while (i < A.length) {
    if (A[w] != A[i]) {
      A[++w] = A[i];
    }
    i++;
  }

  for (i = w + 1; i < A.length; i++) {
    A[i] = NaN;
  }

  return A;
};

const main = () => {
  var A = process.argv[2].split(',').map(digit => (parseInt(digit, 10)));
  console.log(`After removing duplicates: [${removeDuplicates(A)}]`);
};

main();
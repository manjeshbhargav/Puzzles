/**
 * Created by malavallim on 5/24/16.
 */

const swap = (A, i, j) => {
  var temp = A[i];
  A[i] = A[j];
  A[j] = temp;
};

const rotateArray = (A, length, n) => {
  var i = length - 1;
  var count = 0;

  while (1) {
    swap(A, i, i - n);
    count = (count + 1) % n;
    i--;
    if (i == n - 1) { break; }
  }
  if (count) {
    rotateArray(A, i + 1, n - count);
  }
  return A;
};

const main = () => {
  var S = process.argv[2].split(',').map(item => (parseInt(item, 10)));
  var n = parseInt(process.argv[3], 10);
  console.log(`Rotated: ${rotateArray(S, S.length, n % S.length)}`);
};

main();
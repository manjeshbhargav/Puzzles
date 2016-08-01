/**
 * Created by malavallim on 5/24/16.
 */

const swap = (A, i, j) => {
  var temp = A[i];
  A[i] = A[j];
  A[j] = temp;
};

const nextPermutation = S => {
  for (var i = S.length - 2; i >= 0; i--) {
    if (S[i] < S[i + 1]) {
      break;
    }
  }
  if (i >= 0) {
    for (var j = i; j < S.length - 1 && S[i] < S[j + 1]; j++);
    swap(S, i, j);
    S = S.concat(S.splice(i + 1).reverse());
  }
  return S;
};

const main = () => {
  var S = process.argv[2].split(',').map(item => (parseInt(item, 10)));
  console.log(`Permutation: ${nextPermutation(S)}`);
};

main();
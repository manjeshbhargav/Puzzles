/**
 * Created by malavallim on 5/21/16.
 */

const incrementBigInt = A => {
  var i = A.length - 1;
  var carry = 0;

  do {
    carry = (++A[i] < 10) ? 0 : 1;
    A[i] = A[i] % 10;
    i--;
  } while (i >= 0 && carry);

  return carry ? [carry].concat(A) : A;
};

const main = () => {
  var A = [ 1, 9, 2, 9 ];

  console.log(`A: ${JSON.stringify(A)}`);
  console.log(`A++: ${JSON.stringify(incrementBigInt(A))}`);
};

main();
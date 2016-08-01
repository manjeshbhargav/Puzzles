/**
 * Created by malavallim on 5/24/16.
 */

swap = (A, i1, j1, i2, j2) => {
  var temp = A[i1][j1];
  A[i1][j1] = A[i2][j2];
  A[i2][j2] = temp;
};

const rotate2DArray = A => {
  var s = A.length;
  var i = 0;
  var k;

  while (i < s) {
    for (k = i; k < s - 1; k++) {
      swap(A, i, k, k, s - 1);
      console.log(`A[${i}][${k}] <--> A[${k}][${s - 1}]`);
    }
    for (k = i; k < s - 1; k++) {
      swap(A, k, s - 1, s - 1, s - (i ? 0 : 1) - k);
      console.log(`A[${k}][${s - 1}] <--> A[${s - 1}][${s - (i ? 0 : 1) - k}]`);
    }
    for (k = s - 1; k > i; k--) {
      swap(A, s - 1, k, k, i);
      console.log(`A[${s - 1}][${k}] <--> A[${k}][${i}]`);
    }
    print2DArray(A);
    console.log('------------------');
    i++;
    s--;
  }

  return A;
};

const print2DArray = A => {
  for (var i = 0; i < A.length; i++) {
    console.log(A[i]);
  }
};

const main = () => {
  var A = [
    [ 1, 2, 3, 4, 21 ],
    [ 5, 6, 7, 8, 22 ],
    [ 9, 10, 11, 12, 23 ],
    [ 13, 14, 15, 16, 24 ],
    [ 17, 18, 19, 20, 25 ]
  ];
  print2DArray(rotate2DArray(A));
};

main();
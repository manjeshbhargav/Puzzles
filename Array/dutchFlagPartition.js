/**
 * Created by malavallim on 5/20/16.
 */

const swapArrayElements = (A, i, j) => {
  var temp = A[i];
  A[i] = A[j];
  A[j] = temp;
};


const dutchFlagPartition = (A, i) => {
  var l = 0;
  var r = A.length - 1;
  var pivot = A[i];
  var j = 0;

  while (j <= r) {
    if (pivot > A[j]) {
      swapArrayElements(A, j++ , l++);
    }
    else if (pivot < A[j]) {
      swapArrayElements(A, j, r--);
    }
    else {
      j++;
    }
  }

  return A;
};

const main = () => {
  var A = [ 26, 13, 41, 44, 31, 3, 14/*, 91, 15, 100, 20, 2, 96, 12, 53, 63, 39, 77, 49, 5*/ ];
  var pivotIndex = (A.length) - 1;

  console.log(`A: ${JSON.stringify(A)}`);
  console.log(`Pivot: A[${pivotIndex}] = ${A[pivotIndex]}`);
  console.log(`DutchFlagPartition: ${JSON.stringify(dutchFlagPartition(A, pivotIndex))}`);
};

main();
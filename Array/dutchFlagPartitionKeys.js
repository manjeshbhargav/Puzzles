/**
 * Created by malavallim on 5/21/16.
 */

const swapArrayElements = (A, i, j) => {
  var temp = A[i];
  A[i] = A[j];
  A[j] = temp;
};

const dutchFlagPartition_BoolKeys = A => {
  var f = 0, t = A.length - 1;

  while (f < t) {
    if (A[f] && !A[t]) {
      A[f] = !A[f++];
      A[t] = !A[t--];
    }
    else {
      if (!A[f]) { f++; }
      if (A[t]) { t--; }
    }
  }

  return A;
};

const dutchFlagPartition_3Keys = A => {
  var i = 1;
  var l = 0, lkey = A[l++];
  var r = A.length - 1, rkey = A[r--];

  while (rkey == lkey) {
    rkey = A[r--];
  }

  if (r != A.length - 2) {
    r = A.length - 1;
  }

  while (i <= r) {
    if (A[i] == lkey) {
      swapArrayElements(A, i++, l++);
    }
    else if (A[i] == rkey) {
      swapArrayElements(A, i, r--);
    }
    else {
      i++;
    }
  }

  return A;
};

const main = () => {
  var A = [ 2, 2, 1, 1, 3, 1, 3, 2, 3, 2, 1, 1, 1, 2, 2, 2 ];
  var B = [ false, true, false, true, false ];

  console.log(`A: ${JSON.stringify(A)}`);
  console.log(`DutchFlagPartition: ${JSON.stringify(dutchFlagPartition_3Keys(A))}`);

  console.log(`B: ${JSON.stringify(B)}`);
  console.log(`DutchFlagPartition: ${JSON.stringify(dutchFlagPartition_BoolKeys(B))}`);
};

main();
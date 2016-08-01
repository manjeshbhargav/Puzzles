/**
 * Created by malavallim on 6/12/16.
 */

const binSearchCyclical = (A, key, l, r) => {
  l = l === undefined ? 0 : l;
  r = r === undefined ?  A.length - 1: r;

  if (l > r) {
    return -1;
  }

  var mid = (l + r) >> 1;

  if (key === A[mid]) {
    return mid;
  }
  else if (A[l] > A[r]) {
    if (key > A[r]) {
      return binSearchCyclical(A, key, l, mid - 1);
    }
    else {
      return binSearchCyclical(A, key, mid + 1, r);
    }
  }
  else {
    if (key < A[mid]) {
      return binSearchCyclical(A, key, l, mid - 1);
    }
    else {
      return binSearchCyclical(A, key, mid + 1, r);
    }
  }
};

const main = () => {
  console.log(binSearchCyclical(process.argv[2].split(',').map(item => parseInt(item, 10)), parseInt(process.argv[3], 10)));
};

main();
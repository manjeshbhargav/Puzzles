/**
 * Created by malavallim on 6/12/16.
 */

const binSearchUnknownLength = (A, key, l, r) => {
  l = l === undefined ? 0 : l;
  r = r === undefined ? Math.floor(5 * Math.random()) : r;

  if (l > r) {
    return -1;
  }
  else {
    var mid = (l + r) >> 1;
    if (A[mid] === undefined) {
      return binSearchUnknownLength(A, key, l, mid >> 1);
    }
    else if (key === A[mid]) {
      return mid;
    }
    else if (key > A[mid]) {
      if (key > A[r]) {
        return binSearchUnknownLength(A, key, r + 1, r << 2);
      }
      else {
        return binSearchUnknownLength(A, key, mid + 1, r);
      }
    }
    else {
      return binSearchUnknownLength(A, key, l, mid - 1);
    }
  }
};

const main = () => {
  console.log(binSearchUnknownLength(process.argv[2].split(',').map(item => parseInt(item, 10)), parseInt(process.argv[3], 10)));
};

main();
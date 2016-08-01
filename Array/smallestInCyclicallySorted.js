/**
 * Created by malavallim on 6/12/16.
 */

const smallestInCyclicallySorted = (A, l, r) => {
  l = l === undefined ? 0 : l;
  r = r === undefined ?  A.length - 1: r;

  if (l === r) {
    return l;
  }

  var mid = (l + r) >> 1;

  if (A[mid] > A[r]) {
    return smallestInCyclicallySorted(A, mid + 1, r);
  }
  else {
    return smallestInCyclicallySorted(A, l, mid);
  }
};

const main = () => {
  console.log(smallestInCyclicallySorted(process.argv[2].split(',').map(item => parseInt(item, 10))));
};

main();
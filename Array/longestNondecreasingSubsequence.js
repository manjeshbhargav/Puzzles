/**
 * Created by malavallim on 6/19/16.
 */

const longestNondecreasingSubsequence = (A, i, j) => {
  if (j >= A.length) {
    return [];
  }
  else if (i >= 0 && A[i] > A[j]) {
    return longestNondecreasingSubsequence(A, i, j + 1);
  }
  else {
    var l1 = [ A[j] ].concat(longestNondecreasingSubsequence(A, j, j + 1));
    var l2 = longestNondecreasingSubsequence(A, i, j + 1);
    return l1.length >= l2.length ? l1 : l2;
  }
};

const main = () => {
  console.log(longestNondecreasingSubsequence(process.argv[2].split(',').map(item => parseInt(item, 10)), -1, 0));
};

main();
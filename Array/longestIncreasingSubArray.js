/**
 * Created by malavallim on 5/23/16.
 */

const longestIncreasingSubArray = A => {
  var maxLength = 0;
  var length = 0;
  var s = 0;
  var e = 0;

  A.push(-Infinity);
  for (var i = 1; i < A.length; i++) {
    if (A[i] >= A[i - 1]) {
      length++;
    }
    else {
      if (maxLength < length) {
        maxLength = length;
        e = i - 1;
        s = i - length - 1;
      }
      length = 0;
    }
  }

  return [s, e];
};

const main = () => {
  var A = process.argv[2].split(',').map(item => (parseInt(item, 10)));
  console.log(`Longest increasing subarray: [${longestIncreasingSubArray(A)}]`);
};

main();
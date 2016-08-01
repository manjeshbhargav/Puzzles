/**
 * Created by malavallim on 5/23/16.
 */

const maxSubArrayWithSameElements = A => {
  var maxLength = 0;
  var length = 0;

  for (var i = 1; i < A.length; i++) {
    if (A[i] == A[i - 1]) {
      length++;
    }
    else {
      maxLength = Math.max(maxLength, length);
      length = 0;
    }
  }

  return (maxLength + 1);
};

const main = () => {
  var A = process.argv[2].split(',').map(item => (parseInt(item, 10)));
  console.log(`Max subarray with same elements: ${maxSubArrayWithSameElements(A)}`);
};

main();
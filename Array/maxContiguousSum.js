/**
 * Created by malavallim on 5/9/16.
 */

const maxContiguousSum = (array) => {
  if (!array.length) {
    return 0;
  }

  var curMax = array[0];
  var maxSoFar = array[0];

  for (var i = 1; i < array.length; i++) {
    curMax = Math.max(array[i], curMax + array[i]);
    maxSoFar = Math.max(maxSoFar, curMax);
  }

  return maxSoFar;
};

const main = () => {
  var array = process.argv[2].split(',').map(item => parseInt(item, 10));

  console.log(`array: ${JSON.stringify(array)}`);
  console.log(`max contiguous sum: ${maxContiguousSum(array, 0, array.length - 1)}`);
};

main();
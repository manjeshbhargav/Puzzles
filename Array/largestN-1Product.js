/**
 * Created by malavallim on 5/23/16.
 */

const largestN_1Product = A => {
  var zeros = 0;
  var negatives = 0;
  var minPositive = Infinity;
  var maxNegative = -Infinity;

  for (var i = 0; i < A.length; i++) {
    if (A[i] < 0) {
      negatives++;
      maxNegative = Math.max(maxNegative, A[i]);
    }
    else {
      if (A[i] == 0) {
        zeros++;
      }
      minPositive = Math.min(minPositive, A[i]);
    }
  }

  console.log(`${minPositive} ${maxNegative} ${zeros} ${negatives}`);

  if (zeros >= 2) {
    return 0;
  }
  else if (zeros == 1) {
    return (negatives & 1 ? 0 : A.reduce((product, item) => (product * (item || 1)), 1));
  }
  else if (negatives & 1) {
    return A.reduce((product, item) => (product * (item == maxNegative ? 1 : item)), 1);
  }
  else {
    return A.reduce((product, item) => (product * (item == minPositive ? 1 : item)), 1);
  }
};

const main = () => {
  var A = process.argv[2].split(',').map(item => (parseInt(item, 10)));
  console.log(`Max n-1 product: ${largestN_1Product(A)}`);
};

main();
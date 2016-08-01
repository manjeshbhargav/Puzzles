/**
 * Created by malavallim on 5/23/16.
 */

const maxDiff = A => {
  var md = 0;
  var min = Infinity;

  for (var i = 0; i < A.length; i++) {
    md = Math.max(md, A[i] - min);
    min = Math.min(min, A[i]);
  }

  return md;
};

const main = () => {
  var A = process.argv[2].split(',').map(item => (parseInt(item, 10)));
  console.log(`Max diff: ${maxDiff(A)}`);
};

main();
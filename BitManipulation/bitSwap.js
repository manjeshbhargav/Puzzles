/**
 * Created by malavallim on 5/19/16.
 */

const bitSwap = (num, i, j) => {
  var bi = (num >> i) & 1;
  var bj = (num >> j) & 1;

  if (bi === bj) {
    return num;
  }
  return num ^ (1 << i | 1 << j);
};


const main = () => {
  var num = parseInt(process.argv[2], 10);
  var i = parseInt(process.argv[3], 10);
  var j = parseInt(process.argv[4], 10);

  console.log(`bitSwap(${num}, ${i}, ${j}): ${bitSwap(num, i, j)}`);
};

main();
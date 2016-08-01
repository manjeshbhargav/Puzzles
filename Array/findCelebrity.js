/**
 * Created by malavallim on 5/25/16.
 */

const celebrity = F => {
  var i = 0;
  var j = 1;

  while (j < F.length) {
    console.log(i, j);
    if (i != j && F[i][j]) {
      i = j;
      j = 0;
    }
    else {
      j++;
    }
  }

  return i;
};

const main = () => {
  var F = [
    [true, true, true],
    [false, true, false],
    [false, true, true]
  ];
  console.log(`Celebrity: ${celebrity(F)}`);
};

main();
/**
 * Created by malavallim on 5/23/16.
 */

var moves = [];

const winnableBoardGame = (A, p) => {
  if (p == A.length - 1) {
    return true;
  }
  if (A[p] == 0) {
    return false;
  }
  else {
    var winnable = false;

    for (var i = 1; i <= A[p]; i++) {
      if (winnableBoardGame(A, p + i)) {
        moves = [i].concat(moves);
        winnable = true;
        break;
      }
    }

    return winnable;
  }
};

const main = () => {
  var A = process.argv[2].split(',').map(item => (parseInt(item, 10)));
  console.log(`Winnable: ${winnableBoardGame(A, 0, moves)} => [${moves}]`);
};

main();
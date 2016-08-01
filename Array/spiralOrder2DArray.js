/**
 * Created by malavallim on 5/24/16.
 */

const spiralOrder = A => {
  var i = 0, w = A[0].length;
  var j = 0, h = A.length;
  var spiral = [];
  var k;

  while (i < w && j < h) {
    for (k = i; k < w - 1; k++) {
      spiral.push(A[j][k]);
    }
    for (k = j; k < h - 1; k++) {
      spiral.push(A[k][w - 1]);
    }
    for (k = w - 1; k > i; k--) {
      spiral.push(A[h - 1][k]);
    }
    for (k = h - 1; k > j; k--) {
      spiral.push(A[k][i]);
    }
    i++;
    j++;
    w--;
    h--;
  }

  return spiral;
};

const main = () => {
  var A = [
    [ 1, 2, 3, 4 ],
    [ 5, 6, 7, 8 ],
    [ 9, 10, 11, 12 ],
    [ 13, 14, 15, 16 ]
  ];
  console.log(`Spiral: ${spiralOrder(A)}`);
};

main();
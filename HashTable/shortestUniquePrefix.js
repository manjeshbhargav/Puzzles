/**
 * Created by malavallim on 6/18/16.
 */

const Hash = require('./Utils/hash');

const shortestUniquePrefix = (s, D) => {
  var j = 0;

  for (var i = 0; i < D.length; i++) {
    if (s[j] === D[i][j]) {
      for (var k = j - 1; k >= 0 && s[k] === D[i][k]; k--) {}
      if (k < 0) {
        for (j = j + 1; j < s.length && s[j] === D[i][j]; j++) {}
      }
    }
    if (j >= s.length) {
      return '';
    }
  }
  return s.substring(0, j + 1);
};

const main = () => {
  var s = process.argv[2];
  var D = process.argv[3].split(',');
  console.log(shortestUniquePrefix(s, D));
};

main();
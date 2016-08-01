/**
 * Created by malavallim on 6/19/16.
 */

const union = (A, B) => A.concat(B.filter(item => (A.indexOf(item) < 0))).sort();

const unionPowerSet = (A, B) => {
  var A_ = A.map(item => JSON.stringify(item));
  return A.concat(B.filter(item => (A_.indexOf(JSON.stringify(item)) < 0)));
};

const powerSet = set => {
  var ps = [ [ [] ] ];
  var n = set.length;
  var u = [];

  for (var i = 1; i <= n; i++) {
    ps[i] = [];
    for (var j = 0; j < ps[i - 1].length; j++) {
      for (var k = 0; k < n; k++) {
        u = union(ps[i - 1][j], [ set[k] ]);
        if (u.length === i) {
          ps[i] = unionPowerSet(ps[i], [ u ]);
        }
      }
    }
  }

  return ps;
};

const main = () => {
  console.log(powerSet(process.argv[2].split(',').sort()));
};

main();
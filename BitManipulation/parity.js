/**
 * Created by malavallim on 5/19/16.
 */

const parity = num => {
  var p = 0;

  while (num) {
    p ^= (num & 1);
    num >>= 1;
  }

  return p;
};

const precomputedParity = (() => {
  var p = 0;
  var i = 0;

  while (i < 16) {
    p |= (parity(i) << i);
    i++;
  }

  return p;
})();

/**
 *  Applying the transitive property:
 * parity(b[n-1]b[n-2]...b[1]) == parity((b[n-1]^b[(n-1)/2])....(b[(n+1)/2]^b[1]))
 */
const parity64Bit = num => {
  num ^= (num >> 32);
  num ^= (num >> 16);
  num ^= (num >> 8);
  num ^= (num >> 4);
  num &= 0xf;

  return (precomputedParity >> num) & 1;
};

const main = () => {
  console.log(`Parity of ${process.argv[2]} is: ${parity64Bit(parseInt(process.argv[2]))}`);
};

main();
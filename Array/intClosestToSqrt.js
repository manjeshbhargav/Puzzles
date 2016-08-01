/**
 * Created by malavallim on 6/12/16.
 */

const intClosestToSqrt = (k, l, r) => {
  l = l === undefined ? 0 : l;
  r = r === undefined ? k : r;

  if (l === r - 1) {
    return r * r <= k ? r : l;
  }
  else {
    var mid = (l + r) >> 1;
    var sqr = mid * mid;

    if (sqr === k) {
      return mid;
    }
    else if (sqr > k) {
      return intClosestToSqrt(k, l, mid - 1);
    }
    else {
      return intClosestToSqrt(k, mid, r);
    }
  }
};


const main = () => {
  console.log(intClosestToSqrt(parseInt(process.argv[2], 10)));
};

main();
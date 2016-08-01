/**
 * Created by malavallim on 6/1/16.
 */

const substring = (t, s) => {
  var i = s.length - 1;
  var j, k;

  while (i < t.length) {
    console.log(t.substring(i - s.length + 1, i + 1));
    j = s.length - 1;
    while (j >= 0 && t[i - s.length + 1 + j] == s[j]) {
      j--;
    }
    if (j < 0) {
      return i - s.length + 1;
    }
    else {
      k = j - 1;
      while (k >= 0 && t[i - s.length + 1 + j] != s[k]) {
        k--;
      }
      if (k < 0) {
        k = 0;
      }
      i = i + (s.length - 1 - k);
    }
  }

  return -1;
};

const main = () => {
  var t = 'the quick brown fox jumped over the lazy dog!';
  var s = 'zy dog!';
  console.log(substring(t, s));
};

main();
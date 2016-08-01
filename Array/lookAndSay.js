/**
 * Created by malavallim on 6/1/16.
 */

const lookAndSayNext = seq => {
  var i = 0;
  var j = 0;
  var count = 1;
  var number = seq[0];
  var nextSeq = '';

  while (i < seq.length) {
    number = seq[i];
    count = 1;
    j = i + 1;

    while (j < seq.length && seq[j] == number) {
      j++;
      count++;
    }

    nextSeq = nextSeq + count + number;
    i = j;
  }

  return nextSeq;
};

const lookAndSay = n => {
  var seq = n >= 1 ? '1' : '';

  for (var i = 2; i <= n; i++) {
    seq = lookAndSayNext(seq);
  }

  return seq;
};

const main = () => {
  console.log(lookAndSay(parseInt(process.argv[2], 10)));
};

main();
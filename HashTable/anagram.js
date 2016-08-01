/**
 * Created by malavallim on 6/14/16.
 */

const Hash = require('./Utils/hash');

const sort = string => {
  return (string || '').split('').reduce((sumsq, char) => (sumsq + char.charCodeAt(0) * char.charCodeAt(0)), 0);
  //return (string || '').split('').sort().join('');
};

const anagrams = dictionary => {
  var ana = new Hash();

  dictionary.forEach(word => {
    var sorted = sort(word);

    if (ana.has(sorted)) {
      ana.get(sorted).push(word);
    }
    else {
      ana.set(sorted, [ word ]);
    }
  });

  return ana;
};

const main = () => {
  var dictionary = process.argv[2].split(',');
  console.log(anagrams(dictionary));
};

main();
/**
 * Created by malavallim on 6/4/16.
 */

const normalizePathNames = path => {
  var pathItems = path.split('/');
  var stack = [];
  var i;

  for (i = 0; i < pathItems.length; i++) {
    if (pathItems[i] == '..') {
      if (!stack.length) {
        return '';
      }
      else {
        stack.pop();
      }
    }
    else if(pathItems[i] != '' && pathItems[i] != '.') {
      stack.push(pathItems[i]);
    }
  }

  return (pathItems[0] == '.' || pathItems[0] == '' ? `${pathItems[0]}/` : '') + stack.join('/');
};

const main = () => {
  console.log(normalizePathNames(process.argv[2]));
};

main();
/**
 * Created by malavallim on 6/4/16.
 */

const bracketMatch = expr => {
  var i;
  var idx;
  var stack = [];
  var bracketsOpen = [ '(', '[', '{' ];
  var bracketsClosed = [ ')', ']', '}' ];

  for (i = 0; i < expr.length; i++) {
    if (0 <= bracketsOpen.indexOf(expr[i])) {
      stack.push(expr[i]);
    }
    else {
      idx = bracketsClosed.indexOf(expr[i]);
      if (idx < 0 || stack[stack.length - 1] != bracketsOpen[idx]) {
        return false;
      }
      else {
        stack.pop();
      }
    }
  }

  return !stack.length;
};

const main = () => {
  console.log(bracketMatch(process.argv[2]));
};

main();
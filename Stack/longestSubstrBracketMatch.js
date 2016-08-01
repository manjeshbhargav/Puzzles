/**
 * Created by malavallim on 6/4/16.
 */

const longestSubstrBracketMatch = str => {
  var stack = [];
  var start = 0;
  var start_ = 0;
  var len = 0;
  var i;

  for (i = 0; i < str.length; i++) {
    if (str[i] == '[') {
      stack.push(i);
    }
    else if (str[i] == ']') {
      if (!stack.length) {
        start = i + 1;
      }
      else {
        stack.pop();
        start_ = stack.length ? stack[stack.length - 1] : start - 1;
        len = Math.max(len, i - start_);
      }
    }
    else {
      return 0;
    }
  }

  return len;
};

const main = () => {
  console.log(longestSubstrBracketMatch(process.argv[2]));
};

main();
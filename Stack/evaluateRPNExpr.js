/**
 * Created by malavallim on 6/4/16.
 */

const operate = (operand1, operand2, operator) => {
  var operations = {
    '+': function () { return operand1 + operand2; },
    '-': function () { return operand1 - operand2; },
    '*': function () { return operand1 * operand2; },
    '/': function () { return Math.floor(operand1 / operand2); }
  };
  return operations[operator]();
};

const evaluateRPNExpr = expr => {
  var stack = [];
  var operand1 = 0;
  var operand2 = 0;
  var exprArray = expr.split(',');
  var operators = ['+', '-', '*', '/'];

  for (var i = 0; i < exprArray.length; i++) {
    if (0 <= operators.indexOf(exprArray[i])) {
      operand1 = stack.pop();
      operand2 = stack.pop();
      if (operand1 !== undefined && operand2 !== undefined) {
        stack.push(operate(operand1, operand2, exprArray[i]));
      }
      else {
        return NaN;
      }
    }
    else if (!isNaN(operand1 = parseInt(exprArray[i], 10))) {
      stack.push(operand1);
    }
    else {
      return NaN;
    }
  }

  if (stack.length == 1) {
    return stack.pop();
  }
  else {
    return NaN;
  }
};

const main = () => {
  console.log(evaluateRPNExpr(process.argv[2]));
};

main();
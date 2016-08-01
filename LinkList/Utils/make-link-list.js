/**
 * Created by malavallim on 5/3/16.
 */
module.exports = array => {
  var head = null;
  var node = null;
  var i;

  if (array.length) {
    if (array[array.length - 1] instanceof Array) {
      head = {
        x: array[array.length - 1][0],
        y: array[array.length - 1][1],
        next: null
      };
    }
    else {
      head = {
        value: array[array.length - 1],
        next: null
      };
    }

    for (i = array.length - 2; i >= 0; i--) {
      if (array[i] instanceof Array) {
        node = {
          x: array[i][0],
          y: array[i][1],
          next: head
        };
      }
      else {
        node = {
          value: array[i],
          next: head
        };
      }
      head = node;
    }
  }

  return head;
};
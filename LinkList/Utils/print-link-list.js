/**
 * Created by malavallim on 5/2/16.
 */
module.exports = head => {
  var node = head;
  var listStr = '';

  while (node) {
    if (node.hasOwnProperty('value')) {
      listStr = `${listStr}${node.value} --> `;
    }
    else {
      listStr = `${listStr}(${node.x}, ${node.y}) --> `;
    }
    node = node.next;
  }

  listStr = `${listStr} null`;
  console.log(listStr);
};
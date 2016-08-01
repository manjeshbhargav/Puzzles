/**
 * Created by malavallim on 6/4/16.
 */

function Queue () {
  this.primStack = [];
  this.auxStack = [];
}

Queue.prototype = {
  enqueue (element) {
    this.primStack.push(element);
  },
  dequeue () {
    if (!this.auxStack.length) {
      while (this.primStack.length) {
        this.auxStack.push(this.primStack.pop());
      }
    }
    if (this.auxStack.length) {
      return this.auxStack.pop();
    }
    return null;
  },
  toString () {
    return JSON.stringify(this.auxStack.reverse().concat(this.primStack));
  }
};

const main = () => {
  var q = new Queue();

  q.enqueue(1);
  q.enqueue(2);
  q.enqueue(3);
  q.enqueue(4);
  q.enqueue(5);
  console.log(q.toString());
  console.log(`Dequeue: ${q.dequeue()}`);
  q.enqueue(6);
  console.log(q.toString());
};

main();
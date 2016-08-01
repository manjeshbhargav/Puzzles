/**
 * Created by malavallim on 6/4/16.
 */

function Maximum (element) {
  this.element = element;
  this.count = 1;
}

Maximum.prototype = {
  incCount () {
    this.count++;
  },
  decCount () {
    this.count--;
  },
  toString () {
    return `${this.element} (${this.count})`;
  }
};

function Stack () {
  this.elements = [];
  this.maximums = [ new Maximum(-Infinity) ];
}

Stack.prototype = {
  empty () {
    return (this.elements.length <= 0);
  },
  top () {
    return this.empty() ? null : this.elements[this.elements.length - 1];
  },
  push (element) {
    var max = this.maximums[this.maximums.length - 1];

    this.elements.push(element);
    if (element > max.element) {
      this.maximums.push(new Maximum(element));
    }
    else if (element == max.element) {
      max.incCount();
    }
  },
  pop () {
    var top = this.top();
    var max = this.maximums[this.maximums.length - 1];

    if (top !== null) {
      this.elements.pop();
      if (top == max.element) {
        max.decCount();
        if (max.count == 0) {
          this.maximums.pop();
        }
      }
    }

    return top;
  },
  max () {
    return this.maximums[this.maximums.length - 1];
  }
};

const main = () => {
  var s = new Stack();

  console.log(s.elements);
  console.log(s.max());
  s.push(4);
  console.log(s.elements);
  console.log(s.max());
  s.push(3);
  console.log(s.elements);
  console.log(s.max());
  s.push(5);
  console.log(s.elements);
  console.log(s.max());
  s.push(4);
  console.log(s.elements);
  console.log(s.max());
  s.push(5);
  console.log(s.elements);
  console.log(s.max());
  s.push(6);
  console.log(s.elements);
  console.log(s.max());
  s.pop();
  console.log(s.elements);
  console.log(s.max());
  s.pop();
  console.log(s.elements);
  console.log(s.max());
  s.pop();
  console.log(s.elements);
  console.log(s.max());
  s.pop();
  console.log(s.elements);
  console.log(s.max());
};

main();
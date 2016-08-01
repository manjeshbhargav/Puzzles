/**
 * Created by malavallim on 5/22/16.
 */

function BigInt (str) {
  str = str || '';

  var digits = str.split('-');
  digits = (digits.length > 1 ? digits[1] : digits[0]).split('');

  this.negative = (str[0] == '-');
  this.digits = digits.reverse().map(digit => (digit - '0'));
}

BigInt.zeroes = n => {
  return ('0'.repeat(n).split('').map(digit => (digit - '0')));
};

BigInt.prototype = {
  toString () {
    return `${this.negative ? '-' : ''}${this.digits.reverse().join('')}`;
  },
  appendZeroes (n) {
    this.digits = BigInt.zeroes(n).concat(this.digits);
  },
  prependZeros (n) {
    this.digits = this.digits.concat(BigInt.zeroes(n));
  },
  setNegative (negative) {
    this.negative = negative;
  },
  prependDigit (digit) {
    this.digits = this.digits.concat(digit);
  },
  multiplyDigit (digit) {
    var carry = 0;
    var product = new BigInt();

    this.digits.forEach(d => {
      var prod = d * digit + carry;
      carry = Math.floor(prod * 0.1);
      product.prependDigit(prod % 10);
    });

    if (carry) {
      product.prependDigit(carry);
    }

    return product;
  },
  addBigInt (bigInt) {
    var carry = 0;
    var sum = new BigInt();
    var shorterBigInt = (bigInt.digits.length > this.digits.length ? this : bigInt);

    shorterBigInt.prependZeros(Math.abs(bigInt.digits.length - this.digits.length));

    this.digits.forEach((digit, i) => {
      var s = digit + bigInt.digits[i] + carry;
      carry = Math.floor(s * 0.1);
      sum.prependDigit(Math.abs(s % 10));
    });

    if (carry) {
      sum.prependDigit(Math.abs(carry));
    }

    return sum;
  },
  multiplyBigInt (bigInt) {
    var P = new BigInt();

    this.digits.forEach((digit, i) => {
      var prod = bigInt.multiplyDigit(digit);
      prod.appendZeroes(i);
      P = P.addBigInt(prod);
    });

    P.setNegative(!!(this.negative ^ bigInt.negative));
    return P;
  }
};

const main = () => {
  var bigInt1 = new BigInt(process.argv[2]);
  var bigInt2 = new BigInt(process.argv[3]);

  console.log(`Product: ${bigInt1.multiplyBigInt(bigInt2)}`);
};

main();
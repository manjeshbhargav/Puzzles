/**
 * Created by malavallim on 6/1/16.
 */

const roman = (digit, place) => {
  if (place >= 1000) {
    return 'M'.repeat(digit * Math.floor(place / 1000));
  }
  else if (0 <= [1, 2, 3].indexOf(digit)) {
    return (place == 1 ? 'I' : place == 10 ? 'X' : 'C').repeat(digit);
  }
  else if (0 <= [4, 5].indexOf(digit)) {
    return (place == 1 ? 'I' : place == 10 ? 'X' : 'C').repeat(5 - digit) +
           (place == 1 ? 'V' : place == 10 ? 'L' : 'D');
  }
  else if (0 <= [6, 7, 8].indexOf(digit)) {
    return (place == 1 ? 'V' : place == 10 ? 'L' : 'D') +
           (place == 1 ? 'I' : place == 10 ? 'X' : 'C').repeat(digit - 5);
  }
  else if (digit == 9) {
    return (place == 1 ? 'IX' : place == 10 ? 'XC' : 'CM');
  }
  return '';
};

const decimalToRoman = decimal => {
  var place = 1;
  var romanNumeral = '';

  while (decimal) {
    romanNumeral = roman(decimal % 10, place) + romanNumeral;
    decimal = Math.floor(decimal / 10);
    place = place * 10;
  }

  return romanNumeral;
};

const romanToDecimal = roman => {
  var decimal = 0;
  var prevRoman = '';
  var map = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  };

  for (var i = roman.length - 1; i >= 0; i--) {
    if (prevRoman && map[roman[i]] < map[prevRoman]) {
      decimal -= map[roman[i]];
    }
    else {
      decimal += map[roman[i]];
    }
    prevRoman = roman[i];
  }

  return decimal;
};

const main = () => {
  console.log(decimalToRoman(parseInt(process.argv[2], 10)));
  console.log(romanToDecimal(process.argv[3]));
};

main();
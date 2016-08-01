/**
 * Created by malavallim on 5/11/16.
 */

const NA = -1;

const findNextEmptyPosition = (array, curPos) => {
  curPos = curPos === undefined ? array.length : curPos;
  for (var i = curPos - 1; i >= 0; i--) {
    if (array[i] === NA) {
      return i;
    }
  }
  return -1;
};

const findNextElementPosition = (array, curPos) => {
  curPos = curPos === undefined ? array.length : curPos;
  for (var i = curPos - 1; i >= 0; i--) {
    if (array[i] !== NA) {
      return i;
    }
  }
  return -1;
};

const shiftElementsToEnd = array => {
  var elePos = findNextElementPosition(array);
  var emptyPos = findNextEmptyPosition(array);

  while (elePos >= 0 && emptyPos >= 0) {
    array[emptyPos] = array[elePos];
    array[elePos] = NA;
    elePos = findNextElementPosition(array, elePos);
    emptyPos = findNextEmptyPosition(array, emptyPos);
  }

  return (emptyPos + 1);
};

const merge = (mPlusN, m) => {
  var mergePos = 0;
  var mPos = 0;
  var elePos = shiftElementsToEnd(mPlusN);

  while (mPos < m.length && elePos < mPlusN.length) {
    if (mPlusN[elePos] < m[mPos]) {
      mPlusN[mergePos++] = mPlusN[elePos++];
    }
    else {
      mPlusN[mergePos++] = m[mPos++];
    }
  }

  while (mPos < m.length) {
    mPlusN[mergePos++] = m[mPos++];
  }
  while (elePos < mPlusN.length) {
    mPlusN[mergePos++] = mPlusN[elePos++];
  }

  return mPlusN;
};

const main = () => {
  var mPlusN = [ 2, NA, 7, NA, NA, 10, NA ];
  var m = [ 5, 8, 12, 14 ];

  console.log(`mPlusN: ${JSON.stringify(mPlusN)}`);
  console.log(`m: ${JSON.stringify(m)}`);
  console.log(`merge: ${JSON.stringify(merge(mPlusN, m))}`);
};

main();
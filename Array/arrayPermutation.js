/**
 * Created by malavallim on 5/23/16.
 */

const swap = (A, i, j) => {
  var temp = A[i];
  A[i] = A[j];
  A[j] = temp;
};

const findIndexInPerm = (S, i) => {
  var idx = -1;
  while (++idx < S.length) {
    if (S[idx] == i) {
      break;
    }
  }
  return idx;
};

const adjustHeap = (S, A, nodeIdx, rootIdx) => {
  var length = S.length - rootIdx;

  while (nodeIdx < length) {
    var parentIdx = rootIdx + nodeIdx;
    var leftChildIdx = rootIdx + ((nodeIdx << 1) + 1);
    var rightChildIdx = rootIdx + ((nodeIdx << 1) + 2);
    var smallerChildIdx = S[leftChildIdx] > S[rightChildIdx] ? rightChildIdx : leftChildIdx;

    if (S[parentIdx] > S[smallerChildIdx]) {
      swap(A, parentIdx, smallerChildIdx);
      swap(S, parentIdx, smallerChildIdx);
      nodeIdx = smallerChildIdx - rootIdx;
    }
    else {
      break;
    }
  }
};

const minHeap = (S, A, rootIdx) => {
  var length = S.length - rootIdx;
  for (var i = length >> 1; i >= 0; i--) {
    adjustHeap(S, A, i, rootIdx);
  }
};

const heapSort = (S, A) => {
  for (var i = 0; i < S.length; i++) {
    minHeap(S, A, i);
    console.log(`${S} -- ${A}`);
  }
  return A;
};

const applyPermutation = (S, A) => {
  for (var i = 0; i < S.length; i++) {
    while (S[i] != i) {
      swap(A, i, S[i]);
      swap(S, i, S[i]);
      console.log(`${S} -- ${A}`);
    }
  }
  return A;
};

const main = () => {
  var S = process.argv[2].split(',').map(item => (parseInt(item, 10)));
  var A = process.argv[3].split(',');

  console.log(`Permutation: ${applyPermutation(S, A)}`);
};

main();
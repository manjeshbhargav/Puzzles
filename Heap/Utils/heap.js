/**
 * Created by malavallim on 6/9/16.
 */

const swap = (A, i, j) => {
  var temp = A[i];
  A[i] = A[j];
  A[j] = temp;
};

const adjustHeap = (A, I, nodeIdx) => {
  var length = I.length;

  while (nodeIdx < length) {
    var parentIdx = nodeIdx;
    var leftChildIdx = ((nodeIdx << 1) + 1);
    var rightChildIdx = ((nodeIdx << 1) + 2);
    var largerChildIdx = A[I[leftChildIdx]] < A[I[rightChildIdx]] ? rightChildIdx : leftChildIdx;

    if (A[I[parentIdx]] < A[I[largerChildIdx]]) {
      swap(I, parentIdx, largerChildIdx);
      nodeIdx = largerChildIdx;
    }
    else {
      break;
    }
  }
};

const maxHeap = (A, I) => {
  var length = I.length;
  for (var i = length >> 1; i >= 0; i--) {
    adjustHeap(A, I, i);
  }
};

module.exports = {
  maxHeap: maxHeap,
  adjustHeap: adjustHeap
};

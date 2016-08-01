/**
 * Created by malavallim on 5/4/16.
 */

const makeLinkList = require('./Utils/make-link-list');
const printLinkList = require('./Utils/print-link-list');

const detectAndRemoveLoop = head => {
  if (!(head && head.next)) {
    console.log('No loop!');
    return false;
  }

  var oneStep = head;
  var twoStep = head;
  var twoStepPrev = null;

  do {
    oneStep = oneStep.next;
    twoStep = (twoStep.next || twoStep).next;
    if (!twoStepPrev) {
      twoStepPrev = head.next;
    }
    else {
      twoStepPrev = (twoStepPrev.next || twoStepPrev).next;
    }
  }
  while (twoStep && oneStep != twoStep);

  if (oneStep != twoStep) {
    console.log('No loop!');
    return false;
  }

  oneStep = head;
  twoStep = twoStepPrev;

  while (twoStep.next != oneStep) {
    oneStep = oneStep.next;
    twoStep = twoStep.next;
  }

  console.log (`Loop link: ${twoStep.value} --> ${oneStep.value}`);
  twoStep.next = null;
  return true;
};

const main = () => {
  var list = makeLinkList([ 26, 13, 41, 44, 31 ]);

  list.next.next.next.next.next = list.next;
  detectAndRemoveLoop(list);
  printLinkList(list);
};

main();
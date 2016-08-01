/**
 * Created by malavallim on 7/13/16.
 */

const fs = require('fs');

var thunkify = func => {
  return function () {
    var self = this;
    var args = arguments;

    return (success, failure) => {
      success = success || (() => {});
      failure = failure || (() => {});

      console.log(success.toString(), failure.toString());

      [].push.apply(args, [ success, failure ]);
      try {
        func.apply(self, args);
      }
      catch (e) {
        failure.apply(null, [ e ]);
      }
    };
  };
};

var run = generator => {
  return (function () {
    var iterator = generator.apply(this, arguments);

    var nextSuccess = (arg) => {
      console.log('Arg: ', arg);
      var nextSuccCb = iterator.next(arg);
      if (nextSuccCb.value) {
        nextSuccCb.value.apply(null, [nextSuccess, nextFailure]);
      }
    };

    var nextFailure = (err) => {
      console.log('Err: ', err);
      iterator.throw(err);
    };

    try {
      iterator.next().value.apply(null, [nextSuccess, nextFailure]);
    }
    catch (e) {
      iterator.throw(e);
    }
  })();
};

//fs.readFile.call(null, './Array/arrayPermutation.js', 'utf8', (err, data) => { console.log(data); });

run(function * () {
  var readFile = thunkify(fs.readFile);

  try {
    var a = yield readFile('./Array/arrayPermutation.js', 'utf8');
    console.log(a);
  }
  catch (e) {
    console.log('E: ', e);
  }
});

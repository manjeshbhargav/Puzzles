const promisify = (fn, ctx, resolveOn, cbType, cbPos) => {
  return function () {
    var args = [].slice.apply(arguments);

    ctx = ctx || this;
    cbType = cbType || 'success-failure';

    return new Promise((resolve, reject) => {
      const single = (data, err) => {
        if ([undefined, null].indexOf(err) < 0) {
          reject(err);
        }
        else {
          if (!resolveOn) {
            resolve(data);
          }
          else {
            data[resolveOn.cbName].apply(
              data,
              resolveOn.cbArgs.concat([ resolve ])
            );
          }
        }
      };
      const callbacks = {
        'single-error': [ (err, data) => single(data, err) ],
        'single-data': [ single ],
        'success-failure': [ resolve, reject ],
        'failure-success': [ reject, resolve ]
      };

      if (cbPos === 'first') {
        args = callbacks[cbType].concat(args);
      }
      else {
        args = args.concat(callbacks[cbType]);
      }

      try {
        fn.apply(ctx, args);
      }
      catch (e) {
        reject(e);
      }
    });
  };
};

const runner = gen => {
  var done = ret => {};

  return {
    run: function () {
      const iter = gen.apply(this, arguments);
      const error = err => iter.throw(err);

      const next = data => {
        try {
          onYield(iter.next(data));
        }
        catch (err) {
          iter.throw(err);
        }
      };
      const onYield = yieldData => {
        if (!yieldData.done) {
          Promise.resolve(yieldData.value).then(next).catch(error);
        }
        else {
          done(yieldData.value);
        }
      };

      next();

      return {
        then: function (fn) {
          done = fn;
        }
      };
    }
  };
};

var http = require('http');
var wait = promisify(setTimeout, undefined, undefined, 'single-data', 'first');


runner(function * (times) {
  var ping = true;
  while (times--) {
    yield wait(1000);
    console.log(ping ? 'ping' : 'pong');
    ping = !ping;
  }
}).run(10);

/*var http = require('http');
var match = (str, regex, onMatch) => setTimeout(() => onMatch(regex.test(str)), 1000);

runner(function * (get, asyncMatch, url, matchRegex) {
  var data = (yield get(url)).toString();
  return yield asyncMatch(data, matchRegex);
})
  .run(
    promisify(http.get, http, { cbName: 'on', cbArgs: [ 'data' ]}, 'single-data'),
    promisify(match, undefined, undefined, 'single-data'),
    'http://example.org',
    /<body>/
  )
  .then(res => console.log('Then: ', res));*/

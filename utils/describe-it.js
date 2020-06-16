const describe = (description, testFunction) => {
  if (typeof description !== 'string') {
    console.error(new TypeError('first argument must be a string'));
    return;
  }

  console.group(`%c${description}`, 'font-weight: bold;');

  if (typeof testFunction !== 'function') {
    console.error(new TypeError('second argument must be a function'));
    console.groupEnd();
    return
  }

  try {
    testFunction();
  } catch (err) {
    console.error('%cSUITE ERROR:', 'font-weight: bold;', err);
  };
  console.groupEnd();
};


const it = (() => {
  let itIsCalled = false;
  return (description, testFunction) => {
    if (itIsCalled) { throw new Error('can not call it from inside of it'); }

    if (typeof description !== 'string') {
      console.error(new TypeError('first argument must be a string'));
      return;
    }
    if (typeof testFunction !== 'function') {
      console.error(new TypeError('second argument must be a function'));
      return
    }

    itIsCalled = true;

    const consoleBackup = Object.assign({}, console);
    const consoleCalls = [];
    for (let key in console) {
      if (typeof console[key] === 'function') {
        console[key] = function () {
          consoleCalls.push({ method: key, args: Array.from(arguments) });
        };
      };
    };

    let thrownException = null;
    try {
      testFunction();
    } catch (err) {
      thrownException = err;
    };

    Object.assign(console, consoleBackup);

    if (thrownException) {
      console.group(`%cX FAIL: ${description}`, 'font-weight: bold; color: red;');
    } else {
      console.group(`%c√ PASS: ${description}`, 'font-weight: bold; color: green;');
    }
    for (let call of consoleCalls) {
      console[call.method](...call.args);
    };
    if (thrownException) {
      console.error('%cFAILURE:', 'font-weight: bold;', thrownException);
    }
    console.groupEnd();
    itIsCalled = false;
  };
})();

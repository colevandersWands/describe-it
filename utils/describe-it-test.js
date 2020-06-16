describe('describe without a callback');
it('it without a callback');

describe('a passing and a failing', () => {
  it('should fail', () => {
    throw new Error('kishu');
  });
  it('should pass', () => {
    console.log('hi!');
  });
});

describe('"describe" logs errors', () => {
  throw new Error('in describe');
});

describe('nesting describe', () => {
  describe('works just fine', () => {
    it('but nesting "it" does not', () => {
      it('nested it', () => {

      })
    })
  })
})


// describe('"it" will temporarily disable all logging', () => {
//   it('console methods', () => {
//     console.log("i'm a ghost");
//     console.assert(false, 'fail console assert');
//     console.assert(true, 'pass console assert');
//     console.error(new Error('invisible'));
//     console.info('what is info anyway');
//     console.warn('what is warn anyway');
//   });
// });

// describe('"describe" does not disable logging ', () => {

//   console.log("i'm a ghost");
//   console.assert(false, 'fail console assert');
//   console.assert(true, 'pass console assert');
//   it('console methods:', () => {
//     console.log("i'm a ghost");
//     console.assert(false, 'fail console assert');
//     console.assert(true, 'pass console assert');
//     console.error(new Error('invisible'));
//     console.info('what is info anyway');
//     console.warn('what is warn anyway');
//   });
//   console.error(new Error('invisible'));
//   console.info('what is info anyway');
//   console.warn('what is warn anyway');

//   // prompt('type something');
//   // confirm('did you really mean that !?');
//   // alert('phht');

// });

describe();
it();

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


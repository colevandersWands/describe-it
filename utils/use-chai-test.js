const expect = chai.expect;

describe('a passing and a failing', () => {
  it('passing weird overwrite', () => {
    Object.prototype.b = 2;

    expect({ a: 1 }).to.have.own.property('a');
    expect({ a: 1 }).to.have.property('b');
    expect({ a: 1 }).to.not.have.own.property('b');

    expect({ a: 1 }).to.own.include({ a: 1 });
    expect({ a: 1 }).to.include({ b: 2 }).but.not.own.include({ b: 2 });
  });

  it('failing weird overwrite', () => {
    Object.prototype.b = 1;

    expect({ a: 1 }).to.have.own.property('a');
    expect({ a: 1 }).to.have.property('b');
    expect({ a: 1 }).to.not.have.own.property('b');

    expect({ a: 1 }).to.own.include({ a: 1 });
    expect({ a: 1 }).to.include({ b: 2 }).but.not.own.include({ b: 2 });
  });

});

describe('more chai assertions', () => {
  it('.deep', () => {

    // Target object deeply (but not strictly) equals `{a: 1}`
    expect({ a: 1 }).to.deep.equal({ a: 1 });
    expect({ a: 1 }).to.not.equal({ a: 1 });

    // Target array deeply (but not strictly) includes `{a: 1}`
    expect([{ a: 1 }]).to.deep.include({ a: 1 });
    expect([{ a: 1 }]).to.not.include({ a: 1 });

    // Target object deeply (but not strictly) includes `x: {a: 1}`
    expect({ x: { a: 1 } }).to.deep.include({ x: { a: 1 } });
    expect({ x: { a: 1 } }).to.not.include({ x: { a: 1 } });

    // Target array deeply (but not strictly) has member `{a: 1}`
    expect([{ a: 1 }]).to.have.deep.members([{ a: 1 }]);
    expect([{ a: 1 }]).to.not.have.members([{ a: 1 }]);

    // Target set deeply (but not strictly) has key `{a: 1}`
    expect(new Set([{ a: 1 }])).to.have.deep.keys([{ a: 1 }]);
    expect(new Set([{ a: 1 }])).to.not.have.keys([{ a: 1 }]);

    // Target object deeply (but not strictly) has property `x: {a: 1}`
    expect({ x: { a: 1 } }).to.have.deep.property('x', { a: 1 });
    expect({ x: { a: 1 } }).to.not.have.property('x', { a: 1 });

  })
});


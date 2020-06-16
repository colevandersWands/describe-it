const expect = chai.expect;

describe('the main section', () => {
  it('should have class "centered"', () => {
    const mainSection = document.getElementById('main-section');
    expect(mainSection).to.have.attribute('class', 'centered');
  });
  it('should have three children ...', () => {
    const mainSection = document.getElementById('main-section');
    expect(mainSection).to.have.length(3);
  });
  it('... an h2', () => {
    const mainSection = document.getElementById('main-section');
    expect(mainSection.children[0].nodeName).to.equal('H2');
  });
  it('... a br', () => {
    const mainSection = document.getElementById('main-section');
    expect(mainSection.children[1].nodeName).to.equal('BR');
  });
  it('... a button', () => {
    const mainSection = document.getElementById('main-section');
    expect(mainSection.children[2].nodeName).to.equal('BUTTON');
  });
});

describe('the header', () => {
  it('should say "opposite day"', () => {
    const header = document.getElementById('main-section').children[0];
    expect(header).to.have.text('opposite day');
  });
});

describe('the button', () => {
  it('should say "pizza"', () => {
    const button = document.getElementById('main-section').children[2];
    expect(button).to.have.text('pizza');
  });
  it('and log pizza on click', () => {
    const button = document.getElementById('main-section').children[2];
    expect(button).to.have.attribute('onclick', 'console.log("pizza")');
  });
});

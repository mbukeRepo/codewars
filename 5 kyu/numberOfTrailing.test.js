const zeros = require('./numberOfTrailing');
console.log(zeros(12));
describe('Sample Tests', function () {
  it('Should pass sample tests', function () {
    expect(zeros(0)).toEqual(0);
    expect(zeros(5)).toEqual(1);
    expect(zeros(6)).toEqual(1);
    expect(zeros(30)).toEqual(7);
  });
});

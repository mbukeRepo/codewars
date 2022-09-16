const getNum = require('./followingThePaths');
describe('getNum', () => {
  it('should pass basic tests', () => {
    expect(getNum([2, 3, 5, 5])).toEqual([150, 11, 2, 75]);
    expect(getNum([2, 3, 3, 3, 7])).toEqual([378, 15, 2, 189]);
    expect(getNum([3, 3, 3, 11])).toEqual([297, 7, 3, 99]);
    expect(getNum([2, 13, 2, 5, 2, 5, 3, 3])).toEqual([23400, 71, 2, 11700]);
  });
});

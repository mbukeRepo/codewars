const perimeter = require('./perimeterOfSquares');

describe('Basic tests', function () {
  it('Small numbers', function () {
    expect(perimeter(0)).toEqual(4);
    expect(perimeter(5)).toEqual(80);
    expect(perimeter(7)).toEqual(216);
    expect(perimeter(20)).toEqual(114624);
    expect(perimeter(30)).toEqual(14098308);
  });
});

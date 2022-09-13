const ArrayProto = require("./nestingStructure");

Array.prototype = ArrayProto;
describe('basic tests', () => {
  it("first test", () => {
    expect([ 1, 1, 1 ].sameStructureAs( [ 2, 2, 2 ] )).toEqual(true);
  });
  it("second test", () => {
    expect([ 1, [ 1, 1 ] ].sameStructureAs( [ 2, [ 2, 2 ] ] )).toEqual(true);
  });
  it("third test", () => {
    expect([ 1, [ 1, 1 ] ].sameStructureAs( [ [ 2, 2 ], 2 ] )).toEqual(false);
  });
  it("fourth test", () => {
    expect([ 1, [ 1, 1 ] ].sameStructureAs( [ [ 2 ], 2 ] )).toEqual(false);
  });
  it("fifth test", () => {
    expect([ [ [ ], [ ] ] ].sameStructureAs( [ [ [ ], [ ] ] ] )).toEqual(true);
  })
  it("sixth test", () => {
    expect([ [ [ ], [ ] ] ].sameStructureAs( [ [ 1, 1 ] ] )).toEqual(false);
  });
});







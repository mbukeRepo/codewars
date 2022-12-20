const sum = require("./explosiveSum");
describe("basic tessts", () => {
  it("explosive of 1", () => expect(sum(1)).toEqual(1));
  it("explosive of 2", () => expect(sum(2)).toEqual(2));
  it("explosive of 3", () => expect(sum(3)).toEqual(3));
  it("explosive of 4", () => expect(sum(4)).toEqual(5));

  it("explosive of 5", () => expect(sum(5)).toEqual(7));

  it("explosive of 42", () => expect(sum(10)).toEqual(42));
});

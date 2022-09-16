const fibonacci = require("./memoizedFibonacci");

describe("small numbers", () => {
  it("basic tests", () => {
        expect(fibonacci(10)).toEqual(55);
	expect(fibonacci(15)).toEqual(610);
        expect(fibonacci(20)).toEqual(6765)
  });
});

describe("Large numbers", () => {
   it("basic tests", () => {
       expect(fibonacci(50)).toEqual(12586269025);
       expect(fibonacci(60)).toEqual(1548008755920);
       expect(fibonacci(70)).toEqual(190392490709135);
   });
});

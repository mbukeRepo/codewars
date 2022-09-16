const balanced = require("./balancedParentheses");

describe("basic tests", () => {
  it("basic tests", () => {
     expect(balanced(0).sort()).toEqual([""]);
     expect(balanced(1).sort()).toEqual(["()"]);
     expect(balanced(2).sort()).toEqual(["(())","()()"]);
     expect(balanced(3).sort()).toEqual(["((()))","(()())","(())()","()(())","()()()"]);
     expect(balanced(4).sort()).toEqual(["(((())))","((()()))","((())())","((()))()","(()(()))","(()()())","(()())()","(())(())","(())()()","()((()))","()(()())","()(())()","()()(())","()()()()"]);
  });
});

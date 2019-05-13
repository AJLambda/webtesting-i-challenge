const enhancer = require("./enhancer.js");
const { repair, fail, succeed } = require("./enhancer.js");
// test away!

describe("enhancer.js", () => {
  describe("repair() method", () => {
    it("should return durability to 100", () => {
      //arrange - setup
      const item = {
        durability: 3
      };
      const expected = {
        durability: 100
      };

      //act - run system under test
      const result = repair(item);

      //assert - verify it works
      expect(result).toEqual(expected);
    });
  });
});

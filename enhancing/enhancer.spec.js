const enhancer = require("./enhancer.js");
const { repair, fail, succeed } = require("./enhancer.js");
// test away!

describe("enhancer.js", () => {
  describe("repair() method", () => {
    it("should return durability to 100", () => {
      //arrange - setup
      const item = {
        name: "staff",
        enhancement: 5,
        durability: 3
      };
      const expected = {
        name: "staff",
        enhancement: 5,
        durability: 100
      };

      //act - run system under test
      const result = repair(item);

      //assert - verify it works
      expect(result).toEqual(expected);
    });
  });

  describe("succeed() method", () => {
    it("should increase enhancement by 1 if enhancement < 20", () => {
      //arrange - setup
      const item = {
        name: "staff",
        enhancement: 5,
        durability: 3
      };
      const expected = {
        name: "staff",
        enhancement: 6,
        durability: 3
      };

      //act - run system under test
      const result = succeed(item);

      //assert - verify it works
      expect(result).toEqual(expected);
    });
    it("should not increase enhancement if enhancement >= 20", () => {
      //arrange - setup
      const item = {
        name: "staff",
        enhancement: 21,
        durability: 3
      };
      const expected = {
        name: "staff",
        enhancement: 21,
        durability: 3
      };

      //act - run system under test
      const result = succeed(item);

      //assert - verify it works
      expect(result).toEqual(expected);
    });
  });

  describe("fail() method", () => {
    it("should decrease durability by 5 if enhancement < 15", () => {
      //arrange - setup
      const item = {
        name: "staff",
        enhancement: 14,
        durability: 10
      };
      const expected = {
        name: "staff",
        enhancement: 14,
        durability: 5
      };

      //act - run system under test
      const result = fail(item);

      //assert - verify it works
      expect(result).toEqual(expected);
    });
    it("should decrease durability by 10 if enhancement >= 15", () => {
      //arrange - setup
      const item = {
        name: "staff",
        enhancement: 15,
        durability: 15
      };
      const expected = {
        name: "staff",
        enhancement: 15,
        durability: 5
      };

      //act - run system under test
      const result = fail(item);

      //assert - verify it works
      expect(result).toEqual(expected);
    });
    it("should decrease enhancement by 1 if enhancement > 16", () => {
      //arrange - setup
      const item = {
        name: "staff",
        enhancement: 17,
        durability: 15
      };
      const expected = {
        name: "staff",
        enhancement: 16,
        durability: 5
      };

      //act - run system under test
      const result = fail(item);

      //assert - verify it works
      expect(result).toEqual(expected);
    });
  });
});

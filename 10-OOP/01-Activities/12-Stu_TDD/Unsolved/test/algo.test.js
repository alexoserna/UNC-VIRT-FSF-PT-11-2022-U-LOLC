const Algo = require("../algo");

describe("Algo", () => {
  describe("reverse", () => {
    // TODO: Write a test for the `reverse` method that should take a string as an argument and return a new reversed version of the string
    it("should take a string as an argument and return a new reversed version of the string", () => {
      const obj = new Algo();
      let starter = "Hello World!";
      let reverseString = "!dlroW olleH";

      let returnedReverse = obj.reverse(starter);

      expect(returnedReverse).toEqual(reverseString);
    });
  });

  describe("isPalindrome", () => {
    // TODO: Write a test for the `isPalindrome` method that should take a string as an argument and return the boolean `true` if the provided string is a palindrome.
    it("should take a string as an argument and return the boolean `true` if the provided string is a palindrome", () => {
      const obj = new Algo();
      let starter = "racecar";

      expect(obj.isPalindrome(starter)).toEqual(true);
    });
  
  });

  describe("capitalize", () => {
    // TODO: Write a test for the `capitalize` method that should take a string as an argument and return a new string with the first letter of each word capitalized
    it("should take a string as an argument and return a new string with the first letter of each word capitalized", () => {
      const obj = new Algo();

      let base = "capitalize every first word of the string.";
      let capBase = "Capitalize Every First Word Of The String.";

      expect(obj.capitalize(base)).toEqual(capBase);
    });
  });
});

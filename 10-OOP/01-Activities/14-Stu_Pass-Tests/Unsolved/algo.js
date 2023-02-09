function Algo() {}

Algo.prototype.reverse = function(str) {
  // TODO: Your code here
  return str.split("").reverse().join("");

};

Algo.prototype.isPalindrome = function(str) {
  // TODO: Your code here
  return this.reverse(str) === str;
};

Algo.prototype.capitalize = function(str) {
  // TODO: Your code here 
  let wordArray = str.split(" ");
  
  let newWord = wordArray.map(word =>{
    return word.substring(0,1).toUpperCase() + word.substring(1);
  }).join(" ");

  return newWord;

};

module.exports = Algo;

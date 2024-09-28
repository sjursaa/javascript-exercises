const reverseString = function (string) {
  let element = "";
  for (let index = string.length - 1; index >= 0; index--) {
    element += string[index];
  }
  return element;
};

// Do not edit below this line
module.exports = reverseString;

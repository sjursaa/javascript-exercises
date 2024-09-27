const repeatString = function (string, number) {
  if (number < 0) {
    return "ERROR";
  }
  let element = "";
  for (let index = 0; index < number; index++) {
    element += string;
  }
  return element;
};

// Do not edit below this line
module.exports = repeatString;

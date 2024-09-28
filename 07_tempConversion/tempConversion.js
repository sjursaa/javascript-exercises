const convertToCelsius = function () {
  // TODO, round to one decimal
  // TODO, fix conversion for negative values
  let tempFar = arguments[0];
  let tempCel = (tempFar - 32) * (5 / 9);
  return +tempCel.toFixed(1);
};

const convertToFahrenheit = function () {
  // TODO, round to one decimal
  // TODO, fix conversion for negative values
  let tempCel = arguments[0];
  let tempFar = tempCel * (9 / 5) + 32;
  return +tempFar.toFixed(1);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};

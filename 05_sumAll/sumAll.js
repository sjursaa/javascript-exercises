const sumAll = function () {
  const start = arguments[0];
  const stop = arguments[1];
  let sum = 0;

  for (let i = start; i <= stop; i++) {
    sum += i;
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;

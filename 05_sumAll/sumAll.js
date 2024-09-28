const sumAll = function () {
  let start;
  let stop;

  // TODO, refactor, get checks out into their own functions, only summing in here
  // check user input is number
  if (typeof arguments[0] != "number" || typeof arguments[1] != "number") {
    return "ERROR";
  }

  // assign smaller argument to start/bigger to stop
  if (arguments[0] < arguments[1]) {
    start = arguments[0];
    stop = arguments[1];
  } else if (arguments[0] >= arguments[1]) {
    start = arguments[1];
    stop = arguments[0];
  } else {
    return "ERROR";
  }

  if (start <= 0 || stop <= 0) {
    return "ERROR";
  }

  // check if number is int or float
  if (start % 1 !== 0 || stop % 1 !== 0) {
    return "ERROR";
  }

  let sum = 0;

  for (let i = start; i <= stop; i++) {
    sum += i;
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;

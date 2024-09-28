const leapYears = function () {
  const year = arguments[0];

  if (year % 4 == 0) {
    return true;
  } else if (year >= 400 && year % 400 == 0) {
    return true;
  }
  return false;
};

// Do not edit below this line
module.exports = leapYears;

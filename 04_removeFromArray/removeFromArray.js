const removeFromArray = function (array, removeItem) {
  let returnArray = [];
  let removeArray = [];
  removeArray.push(removeItem);

  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < removeArray.length; j++) {
      if (array[i] != removeArray[j]) {
        returnArray.push(array[i]);
      }
    }
    console.log(returnArray[i]);
  }
  console.log(returnArray);
  return returnArray;
};

// Do not edit below this line
module.exports = removeFromArray;

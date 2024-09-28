const removeFromArray = function (array, removeItem) {
  let returnArray = [];
  let removeArray = [];
  removeArray.push(removeItem);
  console.log("OG-Array " + array);
  console.log("OG remove list " + removeItem);
  console.log("Remove this " + removeArray);

  // solution 1

  // TODO sort removeArray
  removeArray.sort();
  console.log("Sorted removeArray " + removeArray);

  // TODO solve for unsorted arrays.

  while (removeArray.length != 0) {
    for (let i = 0; i < array.length; i++) {
      for (let j = 0; j < removeArray.length; j++) {
        if (array[i] !== removeArray[j]) {
          returnArray.push(array[i]);
        }
      }
      //console.log(returnArray[i]);
    }
    removeArray.pop();
  }

  // must work with strings and numbers
  // might need sorting of the removeArray

  /*
  // solution 2
  for (let i = 0; i < removeArray.length; i++) {
    //array.splice(removeArray[i]);
    array.slice();
  }
*/
  console.log("Result post alg: " + array);
  return returnArray;
};

// Do not edit below this line
module.exports = removeFromArray;

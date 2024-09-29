const removeFromArray = function (array, ...args) {
  //let sourceArray = Array.from(arguments[0]);
  //let removeArray = Array.from(arguments[1]);
  let returnArray = [];
  //console.log("Got this array " + returnArray);
  //console.log("Remove this " + removeArray);

  // TODO: solve this one, make the tests pass
  // solution 1
  array.forEach((element) => {
    if (!args.includes(element)) {
      returnArray.push(element);
    }
  });
  console.log(returnArray);
  return returnArray;

  /*
  // TODO sort removeArray
  removeArray.sort();
  console.log("Sorted removeArray " + removeArray);

  // TODO solve for unsorted arrays.

  */
  /*
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
};

// Do not edit below this line
module.exports = removeFromArray;

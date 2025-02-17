/***********************************************************************
Write a recursive function called `addToTwelve` that will return true if there
are two adjacent numbers in the input array that can sum up to 12. Otherwise,
return false.

Examples:

addToTwelve([1, 3, 4, 7, 5]); // true
addToTwelve([1, 3, 4, 7, 6]); // false
addToTwelve([1, 11, 4, 7, 6]); // true
addToTwelve([1, 12, 4, 7, 6]); // false
addToTwelve([1]); // false
***********************************************************************/


function addToTwelve(arr) {
    // Base case: if there are less than two elements left
    if (arr.length < 2) {
      return false;
  }
  // Check if the first two elements sum to twelve
  if (arr[0] + arr[1] === 12) {
      return true;
  } else {
      // Recursive case: check the rest of the array
      return addToTwelve(arr.slice(1));
  }
}

console.log(addToTwelve([1, 3, 4, 7, 5])); // true
console.log(addToTwelve([1, 3, 4, 7, 6])); // false
console.log(addToTwelve([1, 11, 4, 7, 6])); // true
/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = addToTwelve;
} catch (e) {
  module.exports = null;
}

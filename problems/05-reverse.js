/***********************************************************************
Write a recursive function reverse(string) that takes in a string and returns
it reversed.

Examples:

reverse("house"); // "esuoh"
reverse("dog"); // "god"
reverse("atom"); // "mota"
reverse("q"); // "q"
reverse("id"); // "di"
reverse(""); // ""
***********************************************************************/


function reverse(str) {
     // Base case: if the string is empty or has one character
  if (str.length <= 1) {
      return str;
  }
  // Recursive case: take the last character and add it to the reverse of the rest
  return str[str.length - 1] + reverse(str.slice(0, str.length - 1));
}

console.log(reverse("house")); // "esuoh"


/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = reverse;
} catch (e) {
  module.exports = null;
}

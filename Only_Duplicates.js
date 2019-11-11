//6 kyu Only Duplicates
/*
Given a string, remove any characters that are unique from the string.

Example:

input: "abccdefee"

output: "cceee"
*/

function onlyDuplicates(str) {
  // your code here

  let res = [...str].reduce((acc, val, i, array) => {
    if (array.indexOf(val) !== array.lastIndexOf(val)) {
      return (acc += val);
    } else return acc;
  }, "");

  return res;
}

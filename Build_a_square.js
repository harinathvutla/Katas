//7 kyu Build a square
/*
I will give you an integer. Give me back a shape that is as long and wide as the integer. The integer will be a whole number between 0 and 50.

Example
n = 3, so I expect a 3x3 square back just like below as a string:

+++
+++
+++
*/

function generateShape(int) {
  let str = "+";
  str = str.repeat(int);
  str = str + "\n";
  str = str.repeat(int);
  return str.slice(0, -1);
}

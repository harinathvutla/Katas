//6 kyu Count characters in your string
/*
The main idea is to count all the occuring characters(UTF-8) in string. 
If you have string like this aba then the result should be { 'a': 2, 'b': 1 }

What if the string is empty ? Then the result should be empty object literal { }
*/

function count(string) {
  // The function code should be here
  let output = {};
  [...new Set(string)].forEach(x => {
    output[x] = string.split(x).length - 1;
  });
  return output;
}

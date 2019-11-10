//7 kyu Ordered Count of Characters
/*
Count the number of occurrences of each character and return it as a list of tuples in order of appearance.

Example:

orderedCount("abracadabra") == [['a', 5], ['b', 2], ['r', 2], ['c', 1], ['d', 1]]
*/

orderedCount = strng => {
  return [...new Set(strng.split(""))].map(val => {
    let cnt = 0;
    strng.split("").forEach(str => {
      if (str === val) cnt++;
    });
    return [val, cnt];
  });
};

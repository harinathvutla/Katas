//7 kyu Reverse a Number
function reverseNumber(n) {
  let num = n;
  let temp = 0;
  while (num != 0) {
    temp = temp * 10 + (num % 10);
    num = parseInt(num / 10);
  }

  return temp;
}

/*

2. You are given an integer n. You need to check whether it is an armstrong number or not. Return true if it is an armstrong number, otherwise return false.
An armstrong number is a number which is equal to the sum of the digits of the number, raised to the power of the number of digits.
 
Examples:
Input: n = 153
Output: true
Explanation: Number of digits : 3.
13 + 53 + 33 = 1 + 125 + 27 = 153.
Therefore, it is an Armstrong number.
Input: n = 12
Output: false
Explanation: Number of digits : 2.
12 + 22 = 1 + 4 = 5.
Therefore, it is not an Armstrong number.
Input: n = 370
Output: true

*/

console.log("Armstrong number==========>");

function armstrongNumber(n) {
  let totalSum = 0;
  let nCopy = n;
  let number = n;
  let digitCount = 0;
  while (n > 0) {
    n = Math.floor(n / 10);
    digitCount++;
  }
  while (number > 0) {
    rem = Math.floor(number % 10);
    totalSum = totalSum + rem ** digitCount;
    number = Math.floor(number / 10);
  }

  if (nCopy == totalSum) {
    return true;
  } else {
    return false;
  }
}

console.log(armstrongNumber(153));
console.log(armstrongNumber(9));
console.log(armstrongNumber(371));
console.log(armstrongNumber(8));
console.log(armstrongNumber(4679307774));
console.log(armstrongNumber(12));

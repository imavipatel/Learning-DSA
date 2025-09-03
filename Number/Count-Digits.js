/* Day 6:
 
1. You are given an integer n. You need to return the number of digits in the number. 
The number will have no leading zeroes, except when the number is 0 itself.
Examples:
Input: n = 4
Output: 1
Explanation: There is only 1 digit in 4.
Input: n = 14
Output: 2
Explanation: There are 2 digits in 14.
Input: n = 234
Output: 3

*/

console.log("Count digit =========>");

function countDigit(n) {
  if (n == 0) {
    return 1;
  }
  let count = 0;
  n = Math.abs(n);
  while (n > 0) {
    n = Math.floor(n / 10);
    count++;
  }
  return count;
}

console.log(countDigit(1245));
console.log(countDigit(0));
console.log(countDigit(1));
console.log(countDigit(10));
console.log(countDigit(103));

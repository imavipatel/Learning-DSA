/*
4. You are given an integer n. You need to return the number of odd digits present in the number.
The number will have no leading zeroes, except when the number is 0 itself.
Examples:
Input: n = 5
Output: 1
Explanation: 5 is an odd digit.
Input: n = 25
Output: 1
Explanation: The only odd digit in 25 is 5.
Input: n = 15
Output:2
*/
console.log("Odd digit in a number============>");

function countOddDigit(n) {
  let count = 0;
  while (n > 0) {
    rem = Math.floor(n % 10);
    if (rem % 2 !== 0) {
      count++;
    }
    n = Math.floor(n / 10);
  }
  return count;
}

console.log(countOddDigit(222222));
console.log(countOddDigit(232527292));
console.log(countOddDigit(45));
console.log(countOddDigit(1000));
console.log(countOddDigit(1001));

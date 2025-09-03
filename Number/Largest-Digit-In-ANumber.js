/*

5. You are given an integer n. Return the largest digit present in the number.
Examples:
Input: n = 25
Output: 5
Explanation: The largest digit in 25 is 5.
Input: n = 99
Output: 9
Explanation: The largest digit in 99 is 9.
Input: n = 1
Output:1

*/

console.log("Largest digit in a number===========>");

function largestDigitInNumber(n) {
  let largestDigit = 0;
  while (n > 0) {
    let rem = Math.floor(n % 10);
    if (rem > largestDigit) {
      largestDigit = rem;
    }
    n = Math.floor(n / 10);
  }
  return largestDigit;
}

console.log(largestDigitInNumber(1234567));
console.log(largestDigitInNumber(100));
console.log(largestDigitInNumber(543110));
console.log(largestDigitInNumber(333333));

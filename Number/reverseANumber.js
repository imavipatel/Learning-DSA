/*
2. You are given an integer n. Return the integer formed by placing the digits of n in reverse order.
Examples:
Input: n = 25
Output: 52
Explanation: Reverse of 25 is 52.
Input: n = 123
Output: 321
Explanation: Reverse of 123 is 321.
Input: n = 54
Output:
45
*/

function reverseDigit(n) {
  if (n == 0) {
    return 0;
  }
  let nCopy = n;
  let reversedDigit = 0;
  n = Math.abs(n);
  while (n > 0) {
    let rem = Math.floor(n % 10);
    reversedDigit = reversedDigit * 10 + rem;
    n = Math.floor(n / 10);
  }
  if (nCopy < 0) {
    return -reversedDigit;
  } else {
    return reversedDigit;
  }
}

console.log(reverseDigit(1245));
console.log(reverseDigit(0));
console.log(reverseDigit(1));
console.log(reverseDigit(10));
console.log(reverseDigit(103));
console.log(reverseDigit(1000));
console.log(reverseDigit(10001));
console.log(reverseDigit(-10001));

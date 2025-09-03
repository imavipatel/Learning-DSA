/* 
3. You are given an integer n. You need to check whether the number is a palindrome number or not. Return true if it's a palindrome number, otherwise return false.
A palindrome number is a number which reads the same both left to right and right to left.
 
Examples:
Input: n = 121
Output: true
Explanation: When read from left to right : 121.
When read from right to left : 121.
Input: n = 123
Output: false
Explanation: When read from left to right : 123.
When read from right to left : 321.
Input: 101
Output:
true
*/

console.log("Palindrome Number ===> ");

function palindromeNumber(n) {
  if (n < 0) {
    return false;
  } else if (n === 0) {
    return true;
  }
  let nCopy = n;
  let reversedDigit = 0;
  while (n > 0) {
    let rem = Math.floor(n % 10);
    reversedDigit = reversedDigit * 10 + rem;
    n = Math.floor(n / 10);
  }
  if (nCopy == reversedDigit) {
    return true;
  } else {
    return false;
  }
}

console.log(palindromeNumber(1245));
console.log(palindromeNumber(0));
console.log(palindromeNumber(1));
console.log(palindromeNumber(10));
console.log(palindromeNumber(103));
console.log(palindromeNumber(1000));
console.log(palindromeNumber(10001));
console.log(palindromeNumber(121));

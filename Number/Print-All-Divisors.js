/*

Day 7:
 
1.  You are given an integer n. You need to find all the divisors of n. Return all the divisors of n as an array or list in a sorted order.
A number which completely divides another number is called it's divisor.
Examples:
Input: n = 6
Output = [1, 2, 3, 6]
Explanation: The divisors of 6 are 1, 2, 3, 6.
Input: n = 8
Output: [1, 2, 4, 8]
Explanation: The divisors of 8 are 1, 2, 4, 8.
Input: n = 7
Output:[1, 7]

*/

console.log("All Divisor of a number==========>");

function allDivisorOfNumber(n) {
  let divisorNum = [];
  for (let i = 1; i <= n; i++) {
    if (n % i == 0) {
      divisorNum.push(i);
    }
  }
  return divisorNum;
}

console.log(allDivisorOfNumber(15));
console.log(allDivisorOfNumber(20));
console.log(allDivisorOfNumber(6));
console.log(allDivisorOfNumber(8));
console.log(allDivisorOfNumber(100));

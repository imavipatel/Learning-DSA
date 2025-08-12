/*
 
4.  You are given two integers n1 and n2. You need find the Greatest Common Divisor (GCD) of the two given numbers. Return the GCD of the two numbers.
The Greatest Common Divisor (GCD) of two integers is the largest positive integer that divides both of the integers.
 
Examples:
Input: n1 = 4, n2 = 6
Output: 2
Explanation: Divisors of n1 = 1, 2, 4, Divisors of n2 = 1, 2, 3, 6
Greatest Common divisor = 2.
Input: n1 = 9, n2 = 8
Output: 1
Explanation: Divisors of n1 = 1, 3, 9 Divisors of n2 = 1, 2, 4, 8.
Greatest Common divisor = 1.
Input: n1 = 6, n2 = 12
Output:6

*/

console.log("Greatest Common Divisor==========>");

function greatestCommonDivisor(n1, n2) {
  let gcd = 1;
  for (let i = 1; i <= Math.min(n1, n2); i++) {
    if (n1 % i == 0 && n2 % i == 0) {
      if (gcd < i) {
        gcd = i;
      }
    }
  }

  return gcd;
}

console.log(greatestCommonDivisor(4, 6));
console.log(greatestCommonDivisor(9, 8));
console.log(greatestCommonDivisor(6, 12));

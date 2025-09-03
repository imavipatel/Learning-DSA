/*
 
3.  You are given an integer n. You need to find out the number of prime numbers in the range [1, n] (inclusive). Return the number of prime numbers in the range.
A prime number is a number which has no divisors except, 1 and itself.
 
Examples:
Input: n = 6
Output: 3
Explanation: Prime numbers in the range [1, 6] are 2, 3, 5.
Input: n = 10
Output: 4
Explanation: Prime numbers in the range [1, 10] are 2, 3, 5, 7.

*/

console.log("Prime number==========>");

function isPrime(n) {
  if (n < 2) {
    return false;
  }
  for (let i = 2; i < n; i++) {
    if (n % i == 0) {
      return false;
    }
  }
  return true;
}

function primeNumber(n) {
  let primeNum = [];
  for (let i = 2; i <= n; i++) {
    if (isPrime(i)) {
      primeNum.push(i);
    }
  }
  console.log(primeNum);
  return primeNum.length;
}

console.log(primeNumber(2));
console.log(primeNumber(6));
console.log(primeNumber(10));
console.log(primeNumber(21));
console.log(primeNumber(100));

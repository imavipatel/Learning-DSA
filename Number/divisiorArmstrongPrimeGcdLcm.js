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

/*
 
5.  You are given two integers n1 and n2. You need find the Lowest Common Multiple (LCM) of the two given numbers. Return the LCM of the two numbers.
The Lowest Common Multiple (LCM) of two integers is the lowest positive integer that is divisible by both the integers.
 
Examples:
Input: n1 = 4, n2 = 6
Output: 12
Explanation: 4 * 3 = 12, 6 * 2 = 12.
12 is the lowest integer that is divisible both 4 and 6.
Input: n1 = 3, n2 = 5
Output: 15
Explanation: 3 * 5 = 15, 5 * 3 = 15.
15 is the lowest integer that is divisible both 3 and 5.
Input: n1 = 4, n2 = 12
Output:12

*/

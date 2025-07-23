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

console.log("Reverse Digit ===> ");

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
  let reversedDigit = "";
  while (n > 0) {
    let rem = Math.floor(n % 10);
    k;
    reversedDigit = reversedDigit.concat(rem);
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

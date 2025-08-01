/*

Given an integer array of size n containing distinct values in the 
range from 0 to n (inclusive), return the only number missing 
from the array within this range.
Examples:
Input: nums = [0, 2, 3, 1, 4]

Output: 5

Explanation: nums contains 0, 1, 2, 3, 4 thus leaving 5 as the 
only missing number in the range [0, 5]

Input: nums = [0, 1, 2, 4, 5, 6]

Output: 3

Explanation: nums contains 0, 1, 2, 4, 5, 6 thus leaving 3 as 
the only missing number in the range [0, 6]

Input: nums = [1, 3, 6, 4, 2, 5]

Output: 0
*/

function findMissingNumberBetween0toN(arr) {
  let n = arr.length;
  let firstNNaturalNumSum = (n * (n + 1)) / 2;
  console.log(firstNNaturalNumSum);
  let digitSum = 0;
  for (let i = 0; i < arr.length; i++) {
    digitSum += arr[i];
  }
  return firstNNaturalNumSum - digitSum;
}

function findMissingNumberBetween0toNUsingXor(arr) {
  let n = arr.length;
  let xor = 0;
  for (let i = 0; i < n; i++) {
    xor = xor ^ i ^ arr[i];
  }
  return xor ^ n;
}

const arr1 = [0, 2, 3, 1, 4];
const arr2 = [0, 1, 2, 4, 5, 6];
const arr3 = [1, 3, 6, 4, 2, 5];

console.log(findMissingNumberBetween0toN(arr1));
console.log(findMissingNumberBetween0toN(arr2));
console.log(findMissingNumberBetween0toN(arr3));

console.log("Find missing number between 0 to N using XOR");

console.log(findMissingNumberBetween0toNUsingXor(arr1));
console.log(findMissingNumberBetween0toNUsingXor(arr2));
console.log(findMissingNumberBetween0toNUsingXor(arr3));

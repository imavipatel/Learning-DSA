/*

Given an array nums of size n and an integer k, find the length 
of the longest sub-array that sums to k. 
If no such sub-array exists, return 0.

Examples:
Input: nums = [10, 5, 2, 7, 1, 9],  k=15

Output: 4

Explanation: The longest sub-array with a sum equal to 15 is [5, 2, 7, 1], 
which has a length of 4. This sub-array starts at index 1 and ends at index 4, 
and the sum of its elements (5 + 2 + 7 + 1) equals 15. Therefore, the length 
of this sub-array is 4.

Input: nums = [-3, 2, 1], k=6

Output: 0

Explanation: There is no sub-array in the array that sums to 6. Therefore, the output is 0.

*/

//Brute Force Approach

function longestSubarrayWithSumKUsingBruteForce(arr, k) {
  let n = arr.length;
  let length = 0;
  for (let i = 0; i < n; i++) {
    for (let j = i; j < n; j++) {
      let sum = 0;
      for (let k = i; k <= j; k++) {
        sum = sum + arr[k];
      }
      if (sum === k) {
        length = Math.max(length, j - i + 1);
      }
    }
  }
  return length;
}

function longestSubarrayWithSumKUsingBruteForceTwo(arr, k) {
  let n = arr.length;
  let length = 0;
  for (let i = 0; i < n; i++) {
    let sum = 0;
    for (let j = i; j < n; j++) {
      sum = sum + arr[j];
      if (sum === k) {
        length = Math.max(length, j - i + 1);
      }
    }
  }
  return length;
}

let arr1 = [2, 3, 5, 1, 9];
let k1 = 10;

console.log(longestSubarrayWithSumKUsingBruteForce(arr1, k1));
console.log("Brute force approach (Using two loops)");
console.log(longestSubarrayWithSumKUsingBruteForceTwo(arr1, k1));

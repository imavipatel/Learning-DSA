/*

You are given an integer array arr of size n which contains both positive 
and negative integers. Your task is to find the length of the longest 
contiguous subarray with sum equal to 0.

Return the length of such a subarray. If no such subarray exists, return 0.

Examples:
Input: arr = [15, -2, 2, -8, 1, 7, 10, 23]

Output: 5

Explanation:

The subarray [-2, 2, -8, 1, 7] sums up to 0 and has the maximum 
length among all such subarrays.

Input: arr = [2, 10, 4]

Output: 0

Explanation:

There is no subarray whose elements sum to 0.

*/

function longestSubarrayWithSum0(arr, k) {
  let maxLength = 0;
  let sum = 0;
  const sumMap = new Map();

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];

    if (sum === k) {
      maxLength = i + 1;
    }

    if (sumMap.has(sum - k)) {
      maxLength = Math.max(maxLength, i - sumMap.get(sum - k));
    }

    if (!sumMap.has(sum)) {
      sumMap.set(sum, i);
    }
  }

  return maxLength;
}
// Example usage:
const arr1 = [15, -2, 2, -8, 1, 7, 10, 23];
const k1 = 0;
console.log(longestSubarrayWithSum0(arr1, k1)); // Output: 5

const arr2 = [2, 10, 4];
const k2 = 0;
console.log(longestSubarrayWithSum0(arr2, k2)); // Output: 0

const arr3 = [1, -1, 2, -2, 3, -3];
const k3 = 0;
console.log(longestSubarrayWithSum0(arr3, k3)); // Output: 6

const arr4 = [1, 2, 3, 4, 5];
const k4 = 0;
console.log(longestSubarrayWithSum0(arr4, k4)); // Output: 0

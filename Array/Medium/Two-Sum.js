/*

Given an array of integers nums and an integer target. 
Return the indices(0 - indexed) of two elements in nums such that 
they add up to target.

Each input will have exactly one solution, and the same element cannot 
be used twice. Return the answer in increasing order.

Examples:
Input: nums = [1, 6, 2, 10, 3], target = 7

Output: [0, 1]

Explanation: nums[0] + nums[1] = 1 + 6 = 7

Input: nums = [1, 3, 5, -7, 6, -3], target = 0

Output: [1, 5]

Explanation: nums[1] + nums[5] = 3 + (-3) = 0

Input: nums = [-6, 7, 1, -7, 6, 2], target = 3

Output:
[2, 5]
Constraints:
2 <= nums.length <= 105
-104 <= nums[i] <= 104
-105 <= target <= 105
Only one valid answer exists.

*/
//Brute Force Approach

function twoSumUsingBruteForce(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        return [i, j];
      }
    }
  }
  return [-1, -1];
}

//Better Approach using HashMap

function twoSumUsingHashMap(arr, target) {
  const numMap = new Map();
  for (let i = 0; i < arr.length; i++) {
    const complement = target - arr[i];
    if (numMap.has(complement)) {
      return [numMap.get(complement), i];
    }
    numMap.set(arr[i], i);
  }
  return [-1, -1];
}

//Optimal Approach Using Two Pointers

function twoSumUsingTwoPointers(arr, target) {
  arr = arr.map((num, index) => [num, index]); // Pair each number with its index
  arr.sort((a, b) => a[0] - b[0]); // Sort the array based on the numbers
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    const sum = arr[left][0] + arr[right][0];
    if (sum === target) {
      return [arr[left][1], arr[right][1]];
    } else if (sum < target) {
      left++;
    } else {
      right--;
    }
  }
  return [-1, -1];
}

const arr1 = [1, 6, 2, 10, 3];
const target1 = 7;
const arr2 = [1, 3, 5, -7, 6, -3];
const target2 = 0;
const arr3 = [-6, 7, 1, -7, 6, 2];
const target3 = 3;

console.log("Brute Force Approach");

console.log(twoSumUsingBruteForce(arr1, target1)); // Output: [0, 1]
console.log(twoSumUsingBruteForce(arr2, target2)); // Output: [1, 5]
console.log(twoSumUsingBruteForce(arr3, target3)); // Output: [2, 5]

console.log("Better Approach using HashMap");

console.log(twoSumUsingHashMap(arr1, target1)); // Output: [0, 1]
console.log(twoSumUsingHashMap(arr2, target2)); // Output: [1, 5]
console.log(twoSumUsingHashMap(arr3, target3)); // Output: [2, 5]

console.log("Optimal Approach Using Two Pointers");

console.log(twoSumUsingTwoPointers(arr1, target1)); // Output: [0, 1]
console.log(twoSumUsingTwoPointers(arr2, target2)); // Output: [1, 5]
console.log(twoSumUsingTwoPointers(arr3, target3)); // Output: [2, 5]

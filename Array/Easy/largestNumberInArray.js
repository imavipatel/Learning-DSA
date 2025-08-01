/*

Q1.  
Given an array of integers nums, return the value of the largest element in the array
 
Examples:
Input: nums = [3, 3, 6, 1]
Output: 6
Explanation: The largest element in array is 6
Input: nums = [3, 3, 0, 99, -40]
Output: 99
Explanation: The largest element in array is 99

*/

function largestNumberInArray(nums) {
  let largestNum = -Infinity;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > largestNum) {
      largestNum = nums[i];
    }
  }
  return largestNum;
}

const nums = [3, 3, 110, 99, -40];

const nums1 = [3, 3, 6, 1];

console.log(largestNumberInArray(nums));

console.log(largestNumberInArray(nums1));

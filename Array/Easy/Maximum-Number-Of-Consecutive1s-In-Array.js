/*

Day 12: Level - Easy 
 
 
Given a binary array nums, return the maximum number of consecutive 1s in the array.
 
A binary array is an array that contains only 0s and 1s.
 
Examples:
Input: nums = [1, 1, 0, 0, 1, 1, 1, 0]
Output: 3
Explanation: The maximum consecutive 1s are present from index 4 to index 6, amounting to 3 1s
Input: nums = [0, 0, 0, 0, 0, 0, 0, 0]
Output: 0
Explanation: No 1s are present in nums, thus we return 0
Input: nums = [1, 0, 1, 1, 1, 0, 1, 1, 1]
Output:3
Constraints:
1 <= nums.length <= 105
nums[i] is either 0 or 1.

*/

function maximumNumberOfConsecutive1sInArray(arr) {
  let count = 0;
  let maxCount = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 1) {
      count++;
    } else {
      count = 0;
    }
    if (maxCount < count) {
      maxCount = count;
    }
  }

  return maxCount;
}

const arr1 = [0, 1, 0, 1, 1, 1, 1, 0];
const arr2 = [0, 0, 0, 0, 0, 0, 0, 0];
const arr3 = [1, 0, 1, 1, 1, 0, 1, 1, 1];
const arr4 = [1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1];

console.log(maximumNumberOfConsecutive1sInArray(arr1));
console.log(maximumNumberOfConsecutive1sInArray(arr2));
console.log(maximumNumberOfConsecutive1sInArray(arr3));
console.log(maximumNumberOfConsecutive1sInArray(arr4));

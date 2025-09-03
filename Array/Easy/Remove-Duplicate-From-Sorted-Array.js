/*

Day 9: Level - Easy
 
1. Given an integer array nums sorted in non-decreasing order, remove all duplicates in-place so that each unique element appears only once. Return the number of unique elements in the array.
 
If the number of unique elements be k, then,
Change the array nums such that the first k elements of nums contain the unique values in the order that they were present originally.
The remaining elements, as well as the size of the array does not matter in terms of correctness.
 
An array sorted in non-decreasing order is an array where every element to the right of an element is either equal to or greater in value than that element.
 
Examples:
Input: nums = [0, 0, 3, 3, 5, 6]
Output: 4
Explanation: Resulting array = [0, 3, 5, 6, _, _]
There are 4 distinct elements in nums and the elements marked as _ can have any value.
Input: nums = [-2, 2, 4, 4, 4, 4, 5, 5]
Output: 4
Explanation: Resulting array = [-2, 2, 4, 5, _, _, _, _]
There are 4 distinct elements in nums and the elements marked as _ can have any value.
Input: nums = [-30, -30, 0, 0, 10, 20, 30, 30]
Select the possible resulting array.
Output:[-30, 0, 10, 20, 30, _, _, _]
Constraints:
1 <= nums.length <= 105
-104 <= nums[i] <= 104
nums is sorted in non-decreasing order.

*/

//Two Pointer approach

// function removeDuplicateFromSortedArray1(arr) {
//   let x = 0;
//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] != arr[x]) {
//       x = x + 1;
//       arr[x] = arr[i];
//     }
//   }
//   console.log(arr);
//   return x + 1;
// }

function removeDuplicateFromSortedArray(arr) {
  let x = 1;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] !== arr[i - 1]) {
      arr[x] = arr[i];
      x++;
    }
  }
  console.log(arr);
  return x;
}

const arr1 = [0, 0, 3, 3, 5, 5, 6, 7, 7];
const arr2 = [-2, 2, 4, 4, 4, 4, 5, 5];
const arr3 = [-30, -30, 0, 0, 10, 20, 30, 30];
const arr4 = [0, 1, 2, 3, 4, 5, 6, 7];
const arr5 = [1, 1, 2, 3, 3];

console.log(removeDuplicateFromSortedArray(arr1));
console.log(removeDuplicateFromSortedArray(arr2));
console.log(removeDuplicateFromSortedArray(arr3));
console.log(removeDuplicateFromSortedArray(arr4));
console.log(removeDuplicateFromSortedArray(arr5));

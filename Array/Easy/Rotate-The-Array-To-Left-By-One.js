/*

Day 13 : Level - Easy
 
Given an integer array nums, rotate the array to the left by one.
 
Note: There is no need to return anything, just modify the given array.
 
Examples:
Input: nums = [1, 2, 3, 4, 5]
Output: [2, 3, 4, 5, 1]
Explanation: Initially, nums = [1, 2, 3, 4, 5]
Rotating once to left -> nums = [2, 3, 4, 5, 1]
Input: nums = [-1, 0, 3, 6]
Output: [0, 3, 6, -1]
Explanation: Initially, nums = [-1, 0, 3, 6]
Rotating once to left -> nums = [0, 3, 6, -1]
 
*/

function rotateArrayToLeftByOne(arr) {
  let temp = arr[0];
  for (let i = 1; i < arr.length; i++) {
    arr[i - 1] = arr[i];
  }
  console.log(arr);
  arr[arr.length - 1] = temp;
  return arr;
}

function rotateArrayToLeftByOne1(arr) {
  let temp = arr[0];
  for (let i = 1; i < arr.length; i++) {
    arr[i - 1] = arr[i];
  }
  console.log(arr);
  arr[arr.length - 1] = temp;
  return arr;
}

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [1, 2, 3, 4, 5];

console.log(rotateArrayToLeftByOne(arr1));
console.log(rotateArrayToLeftByOne1(arr2));

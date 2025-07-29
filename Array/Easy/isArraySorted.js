/*
Day 8: 
1. Given an array arr of size n, the task is to check if the given array 
is sorted in (ascending / Increasing / Non-decreasing) order. 
If the array is sorted then return True, else return False.
 
Examples:
Input: n = 5, arr = [1,2,3,4,5]
Output: True
Explanation: The given array is sorted i.e Every element in the array is 
smaller than or equals to its next values, So the answer is True.
Input: n = 5, arr = [5,4,6,7,8]
Output: False
Explanation: The given array is Not sorted i.e Every element in the 
array is not smaller than or equal to its next values, So the answer is False. 
Here element 5 is not smaller than or equal to its future elements.
Input: n = 5, arr = [5,4,3,2,1]
Output:False

*/

function isArraySorted(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] <= arr[i + 1]) {
      return true;
    } else {
      return false;
    }
  }
}
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [5, 4, 3, 2, 1];
const arr3 = [5, 4, 6, 7, 8];

console.log(isArraySorted(arr1));
console.log(isArraySorted(arr2));
console.log(isArraySorted(arr3));

/*
Given an integer array nums, move all the 0's to the end of the array. The relative order of the other elements must remain the same. This must be done in place, without making a copy of the array.


Examples:
Input: nums = [0, 1, 4, 0, 5, 2]

Output: [1, 4, 5, 2, 0, 0]

Explanation: Both the zeroes are moved to the end and the order of the other elements stay the same

Input: nums = [0, 0, 0, 1, 3, -2]

Output: [1, 3, -2, 0, 0, 0]

Explanation: All 3 zeroes are moved to the end and the order of the other elements stay the same

Input: nums = [0, 20, 0, -20, 0, 20]

Output:
[20, -20, 20, 0, 0, 0]

*/

function moveZerosToEnd(arr) {
  let x = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      arr[x] = arr[i];
      x++;
    }
  }
  console.log(x);
  for (let i = x; i < arr.length; i++) {
    arr[i] = 0;
  }

  return arr;
}

const arr1 = [0, 1, 4, 0, 5, 2];
const arr2 = [0, 0, 0, 1, 3, -2];
const arr3 = [0, 20, 0, -20, 0, 20];

console.log(moveZerosToEnd(arr1));
console.log(moveZerosToEnd(arr2));
console.log(moveZerosToEnd(arr3));

/*

Day14: Level - Easy
 
Given an integer array nums and a non-negative integer k, rotate the array to the left by k steps.
 
Examples:
Input: nums = [1, 2, 3, 4, 5, 6], k = 2
Output: nums = [3, 4, 5, 6, 1, 2]
Explanation: rotate 1 step to the left: [2, 3, 4, 5, 6, 1]
rotate 2 steps to the left: [3, 4, 5, 6, 1, 2]
Input: nums = [3, 4, 1, 5, 3, -5], k = 8
Output: nums = [1, 5, 3, -5, 3, 4]
Explanation: rotate 1 step to the left: [4, 1, 5, 3, -5, 3]
rotate 2 steps to the left: [1, 5, 3, -5, 3, 4]
rotate 3 steps to the left: [5, 3, -5, 3, 4, 1]
rotate 4 steps to the left: [3, -5, 3, 4, 1, 5]
rotate 5 steps to the left: [-5, 3, 4, 1, 5, 3]
rotate 6 steps to the left: [3, 4, 1, 5, 3, -5]
rotate 7 steps to the left: [4, 1, 5, 3, -5, 3]
rotate 8 steps to the left: [1, 5, 3, -5, 3, 4]

*/

function rotateArrayToLeftByKTimes(arr, k) {
  let n = arr.length;
  k = k % n; //to avoid unnecessary rotations
  console.log(k);
  const temp = [];
  for (let i = 0; i < k; i++) {
    temp.push(arr[i]);
  }
  for (let i = k; i < n; i++) {
    arr[i - k] = arr[i];
  }
  for (let i = 0; i < k; i++) {
    arr[n - k + i] = temp[i];
  }

  return arr;
}

function rotateArrayToLeftByKTimes1(arr, k) {
  let n = arr.length;
  k = k % n; //to avoid unnecessary rotations k>n
  console.log(k);
  function reverse(start, end) {
    while (start < end) {
      [arr[start], arr[end]] = [arr[end], arr[start]];
      start++;
      end--;
    }
  }
  reverse(0, k - 1);
  reverse(k, n - 1);
  reverse(0, n - 1);

  return arr;
}

const arr1 = [1, 2, 3, 4, 5, 6];
const k1 = 2;

const arr2 = [3, 4, 1, 5, 3, -5];
const k2 = 8;

const arr3 = [1, 2, 3, 4, 5, 6];
const k3 = 2;

const arr4 = [3, 4, 1, 5, 3, -5];
const k4 = 8;

console.log(rotateArrayToLeftByKTimes(arr1, k1));
console.log(rotateArrayToLeftByKTimes(arr2, k2));

console.log("By Method 2");

console.log(rotateArrayToLeftByKTimes1(arr3, k3));
console.log(rotateArrayToLeftByKTimes1(arr4, k4));

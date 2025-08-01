/*

Given two sorted arrays nums1 and nums2, return an array that contains the union 
of these two arrays. The elements in the union must be in ascending order.

The union of two arrays is an array where all values are distinct and are present 
in either the first array, the second array, or both.


Examples:
Input: nums1 = [1, 2, 3, 4, 5], nums2 = [1, 2, 7]

Output: [1, 2, 3, 4, 5, 7]

Explanation: The elements 1, 2 are common to both, 3, 4, 5 are from nums1 and 7 is from nums2

Input: nums1 = [3, 4, 6, 7, 9, 9], nums2 = [1, 5, 7, 8, 8]

Output: [1, 3, 4, 5, 6, 7, 8, 9]

Explanation: The element 7 is common to both, 3, 4, 6, 9 are from nums1 and 1, 5, 8 is from nums2

*/

//Method 1

function unionOfTwoSortedArrays(arr1, arr2) {
  let set = new Set();
  let union = [];
  for (item of arr1) {
    set.add(item);
  }
  for (item of arr2) {
    set.add(item);
  }

  union = Array.from(set).sort((a, b) => a - b);
  return union;
}

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [1, 2, 7];

const arr3 = [3, 4, 6, 7, 9, 9];
const arr4 = [1, 5, 7, 8, 8];

console.log(unionOfTwoSortedArrays(arr1, arr2));
console.log(unionOfTwoSortedArrays(arr3, arr4));

//Method 2

console.log("Method 2 Union of two array by two pointer");

function unionOfTwoSortedArraysTwoPointer(nums1, nums2) {
  let i = 0,
    j = 0;
  const result = [];
  while (i < nums1.length && j < nums2.length) {
    //Avoid duplicates in result
    const last = result[result.length - 1];

    if (nums1[i] == nums2[j]) {
      if (last !== nums1[i]) {
        result.push(nums1[i]);
      }
      i++;
      j++;
    } else if (nums1[i] < nums2[j]) {
      if (last !== nums1[i]) {
        result.push(nums1[i]);
      }
      i++;
    } else {
      if (last !== nums2[j]) {
        result.push(nums2[j]);
      }
      j++;
    }
  }
  while (i < nums1.length) {
    if (result[result.length - 1] !== nums1[i]) {
      result.push(nums1[i]);
    }
    i++;
  }
  while (j < nums2.length) {
    if (result[result.length - 1] !== nums2[j]) {
      result.push(nums2[j]);
    }
    j++;
  }
  return result;
}

const nums1 = [1, 2, 3, 4, 5];
const nums2 = [1, 2, 7];

const nums3 = [3, 4, 6, 7, 9, 9];
const nums4 = [1, 5, 7, 8, 8];

console.log(unionOfTwoSortedArraysTwoPointer(nums1, nums2));
console.log(unionOfTwoSortedArraysTwoPointer(nums3, nums4));

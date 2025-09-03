/*

Given an array arr of n elements. The task is to reverse the given array. The reversal of array should be inplace.
 
Examples:
Input: n=5, arr = [1,2,3,4,5]
Output: [5,4,3,2,1]
Explanation: The reverse of the array [1,2,3,4,5] is [5,4,3,2,1]
Input: n=6, arr = [1,2,1,1,5,1]
Output: [1,5,1,1,2,1]
Explanation: The reverse of the array [1,2,1,1,5,1] is [1,5,1,1,2,1].
Input: n=3, arr = [1,2,1]
Output:[1,2,1]

*/

function reverseArrayOne(arr) {
  for (let i = 0; i < Math.floor(arr.length / 2); i++) {
    let temp = arr[i];
    arr[i] = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = temp;
  }
  return arr;
}

function reverseArrayTwo(arr) {
  const mid = Math.floor(arr.length / 2);
  let left = 0;
  let right = arr.length - 1;
  while (left < mid) {
    let temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;
    left++;
    right--;
  }
  return arr;
}

function reverseArrayThree(arr) {
  let start = 0;
  let end = arr.length - 1;
  while (start < end) {
    console.log("arr1", arr);
    [arr[start], arr[end]] = [arr[end], arr[start]];
    console.log("arr2", arr);
    console.log("start - end 1", start, end);
    start++;
    end--;
    console.log("start - end 2 ", start, end);
  }

  return arr;
}

console.log(reverseArrayOne([1, 2, 3, 4, 5]));
console.log(reverseArrayTwo([1, 2, 3, 4, 5]));
console.log(reverseArrayThree([1, 2, 3, 4, 5]));
console.log(reverseArrayOne([1, 2, 1, 1, 5, 1]));
console.log(reverseArrayTwo([1, 2, 1, 1, 5, 1]));
console.log(reverseArrayThree([1, 2, 1, 1, 5, 1]));
console.log(reverseArrayOne([1, 2, 3, 1, 5, 1]));
console.log(reverseArrayTwo([1, 2, 3, 1, 5, 1]));
console.log(reverseArrayThree([1, 2, 3, 1, 5, 1]));

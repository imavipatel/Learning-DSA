/*

Given an array of nums of n integers. 
Every integer in the array appears twice except one integer. 
Find the number that appeared once in the array.

Examples:
Input : nums = [1, 2, 2, 4, 3, 1, 4]

Output : 3

Explanation : The integer 3 has appeared only once.

Input : nums = [5] 

Output : 5

Explanation : The integer 5 has appeared only once.

*/

//Brute-force approach

function findSingleNumberInArrayWhereOtherNumberAreTwice(arr) {
  for (let i = 0; i < arr.length; i++) {
    let count = 0;
    let num = arr[i];
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] == num) {
        count++;
      }
    }
    if (count == 1) {
      return num;
    }
  }
  return -1;
}

//Optimal approach Using XOR
/*
Optimal Approach(Using XOR): 
Intuition:
Two important properties of XOR are the following:

XOR of two same numbers is always 0 i.e. a ^ a = 0. ←Property 1.
XOR of a number with 0 will result in the number itself i.e. 0 ^ a = a.  ←Property 2

Here all the numbers except the single number appear twice and so will form a pair. Now, if we perform XOR of all elements of the array, the XOR of each pair will result in 0 according to the XOR property 1. The result will be = 0 ^ (single number) = single number (according to property 2).

So, if we perform the XOR of all the numbers of the array elements, we will be left with a single number.

Approach:
We will just perform the XOR of all elements of the array using a loop and the final XOR will be the answer.
Dry run:

Assume the given array is: [4,1,2,1,2]
XOR of all elements = 4^1^2^1^2
      = 4 ^ (1^1) ^ (2^2)
      = 4 ^ 0 ^ 0 = 4^0 = 4
Hence, 4 is the single element in the array.

*/

function findSingleNumberInArrayWhereOtherNumberAreTwiceUsingXor(arr) {
  let xor = 0;
  for (let i = 0; i < arr.length; i++) {
    xor = xor ^ arr[i];
  }
  return xor;
}

function findSingleNumberInArrayWhereOtherNumberAreTwiceUsingMap(arr) {
  let n = arr.length;
  const map = new Map();
  for (let i = 0; i < n; i++) {
    const num = arr[i];
    map.set(num, (map.get(num) || 0) + 1);
  }
  console.log("mapped Array", map);
  for (const [num, count] of map) {
    console.log(num, count);
    if (count == 1) {
      return num;
    }
  }
  return -1;
}

const arr1 = [1, 2, 2, 4, 3, 1, 4];

const arr2 = [5];

console.log(findSingleNumberInArrayWhereOtherNumberAreTwice(arr1));
console.log(findSingleNumberInArrayWhereOtherNumberAreTwice(arr2));

console.log("Find single number using XOR");
console.log(findSingleNumberInArrayWhereOtherNumberAreTwiceUsingXor(arr1));
console.log(findSingleNumberInArrayWhereOtherNumberAreTwiceUsingXor(arr2));

console.log("Find single number using MAP");
console.log(findSingleNumberInArrayWhereOtherNumberAreTwiceUsingMap(arr1));
console.log(findSingleNumberInArrayWhereOtherNumberAreTwiceUsingMap(arr2));

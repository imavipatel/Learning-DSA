/*

Q2.
Given an array of integers nums, return the second-largest element in the array. If the second-largest element does not exist, return -1.
 
Examples:
Input: nums = [8, 8, 7, 6, 5]
Output: 7
Explanation: The largest value in nums is 8, the second largest is 7
Input: nums = [10, 10, 10, 10, 10]
 
Output: -1
 
Explanation: The only value in nums is 10, so there is no second largest value, thus -1 is returned
Input: nums = [7, 7, 2, 2, 10, 10, 10]
Output:7

*/

//Method 1

const nums = [8,8, 9, 7, 6, 5]

const nums1 = [7,7, 8, 2, 2, 11, 10, 10]


function secondLargestNumberInArray(nums){
   let firstLargest = -Infinity
   let secondLargest = -Infinity
   for(let i=0; i<nums.length; i++){
    if(nums[i]> firstLargest){
        secondLargest = firstLargest;
        firstLargest = nums[i]
    }else if(nums[i]> secondLargest && nums[i]< firstLargest ){
        secondLargest = nums[i]
    }
   }
   return secondLargest === -Infinity ? -1 : secondLargest;
}


console.log(secondLargestNumberInArray(nums))

console.log(secondLargestNumberInArray(nums1))


//Method 2





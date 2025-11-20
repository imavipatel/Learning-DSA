/*

Given an alphanumeric string s, return the second largest numerical 
digit that appears in s, or -1 if it does not exist.

An alphanumeric string is a string consisting of 
lowercase English letters and digits.

Example 1:

Input: s = "dfa12321afd"
Output: 2
Explanation: The digits that appear in s are [1, 2, 3]. The second largest digit is 2.
Example 2:

Input: s = "abc1111"
Output: -1
Explanation: The digits that appear in s are [1]. There is no second largest digit. 
 
*/
//First Method

function secondLargestDigitInAString(str) {
  let firstLargest = -Infinity;
  let secondLargest = -Infinity;
  for (let i = 0; i < str.length; i++) {
    if (str[i] < "0" || str[i] > "9") continue;
    const d = str[i].charCodeAt(0) - 48;
    if (d > firstLargest) {
      secondLargest = firstLargest;
      firstLargest = d;
    } else if (d > secondLargest && d < firstLargest) {
      secondLargest = d;
    }
  }
  return secondLargest === -Infinity ? -1 : secondLargest;
}

console.log(secondLargestDigitInAString("dfa12321afd")); // 2
console.log(secondLargestDigitInAString("abc1111")); // -1
console.log(secondLargestDigitInAString("ck077")); // 0
console.log(secondLargestDigitInAString("98a7b65")); // 8

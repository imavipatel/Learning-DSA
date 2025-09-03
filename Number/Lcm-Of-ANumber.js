/*
 
5.  You are given two integers n1 and n2. You need find the Lowest Common Multiple (LCM) of the two given numbers. Return the LCM of the two numbers.
The Lowest Common Multiple (LCM) of two integers is the lowest positive integer that is divisible by both the integers.
 
Examples:
Input: n1 = 4, n2 = 6
Output: 12
Explanation: 4 * 3 = 12, 6 * 2 = 12.
12 is the lowest integer that is divisible both 4 and 6.
Input: n1 = 3, n2 = 5
Output: 15
Explanation: 3 * 5 = 15, 5 * 3 = 15.
15 is the lowest integer that is divisible both 3 and 5.
Input: n1 = 4, n2 = 12
Output:12

*/

console.log("Lowest Common Multiple==========>");

function lowestCommonMultiple(n1, n2) {
  let lcm = 1;
  for (let i = 1; i <= n1 * n2; i++) {
    if (i * n1 == 0 && i * n2 == 0) {
      if (lcm < i) {
        lcm = i;
      }
    }
  }

  return lcm;
}

console.log(lowestCommonMultiple(4, 6));
console.log(lowestCommonMultiple(3, 5));
console.log(lowestCommonMultiple(4, 12));

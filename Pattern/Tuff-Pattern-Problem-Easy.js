/*
Take you forward Patter Problem
 
Write a program to print the following pattern
 
Pattern 1:

*****
*****
*****
*****
*****
 
*/

console.log("Pattern 1==========>");

function printPattern1() {
  let n = 5; // Number of rows
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j < n; j++) {
      row += "*";
    }
    console.log(row);
  }
}

/*

Pattern 2:

    *
   ***
  *****
 *******
*********

*/

/*

Day 3:
 
Write a program to print the following pattern
 
Pattern 1:
 
*
**
***
****
*****
 
*/

console.log("Pattern 1===========>");

const n = 5;

function starTrianglePattern1() {
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j < i + 1; j++) {
      row = row + "*";
    }
    console.log(row);
  }
}

starTrianglePattern1();

/*

Pattern 2:
 
*
**
* *
*  *
*****

*/

console.log("Pattern 2===========>");

function starTrianglePattern2() {
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j < i + 1; j++) {
      if (i == j || j == 0 || i == n - 1) {
        row = row + "*";
      } else {
        row = row + " ";
      }
    }
    console.log(row);
  }
}

starTrianglePattern2();

/*
 
Pattern 3:
 
    *
   **
  ***
 ****
*****

*/

console.log("Pattern 3===========>");

function starTrianglePattern3() {
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j < n - i - 1; j++) {
      row = row + " ";
    }
    for (let k = 0; k <= i; k++) {
      row = row + "*";
    }
    console.log(row);
  }
}

starTrianglePattern3();

/*

Pattern 4:      

    *
   **
  * *
 *  *
*****

    00
   01 11
  02 12 22
 03 13 23 33
04 14 24 34 44

*/

console.log("Pattern 4===========>");

function starTrianglePattern4() {
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j < n - i - 1; j++) {
      row = row + " ";
    }
    for (let k = 0; k <= i; k++) {
      if (k == i || k == 0 || i == n - 1) {
        row = row + "*";
      } else {
        row = row + " ";
      }
    }
    console.log(row);
  }
}

starTrianglePattern4();

/*

Pattern 5:

*****
****
***
**
*

*/

console.log("Pattern 5===========>");

function starTrianglePattern5(n) {
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j < n - i; j++) {
      row = row + "*";
    }
    console.log(row);
  }
}

starTrianglePattern5(5);

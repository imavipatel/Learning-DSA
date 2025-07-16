/*

Day 2:

Write a program to print the following pattern

Pattern 1:

*****
*****
*****
*****
*****

Pattern 2:

*****
*   *
*   *
*   *
*****

Pattern 3:

*****
** **
* * *
** **
*****

Pattern 4:   

    *****
   *****
  *****
 *****
*****

Pattern 5:

*****
 *****
  *****
   *****
    *****

*/

//Pattern:1

/*
 *****
 *****
 *****
 *****
 *****
 */

console.log("Pattern 1==========>");

const n = 5;

function squareFillPattern() {
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j < n; j++) {
      row += "*";
    }
    console.log(row);
  }
}
squareFillPattern();

//Pattern 2:

/*
*****
*   *
*   *
*   *
*****

*/

console.log("Pattern 2==========>");

function squarePatternWithSpaces() {
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j < n; j++) {
      if (i === 0 || j === 0 || i === n - 1 || j === n - 1) {
        row += "*";
      } else {
        row += " ";
      }
    }
    console.log(row);
  }
}

squarePatternWithSpaces();

//Pattern:3

/*
 *****
 ** **
 * * *
 ** **
 *****
 */

console.log("Pattern 3==========>");

function hollowSquarePatternDiagonal() {
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j < n; j++) {
      if (
        i === 0 ||
        j === 0 ||
        i === n - 1 ||
        j === n - 1 ||
        i === j ||
        i + j === n - 1
      ) {
        row += "*";
      } else {
        row += " ";
      }
    }
    console.log(row);
  }
}

hollowSquarePatternDiagonal();

//Pattern:4

/*
    *****
   *****
  *****
 *****
*****
 */

console.log("Pattern 4==========>");

function hollowSquarePatternRightShift() {
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j < n-i; j++) {
      row = row + " ";
    }
    for (let k = 0; k < n; k++) {
      row = row + "*";
    }
    console.log(row);
  }
}

hollowSquarePatternRightShift();

//Pattern:5

/*
*****
 *****
  *****
   *****
    *****
 */

console.log("Pattern 5==========>");

function hollowSquarePatternLeftShift() {
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j < i; j++) {
      row = row + " ";
    }
    for (let k = 0; k < n; k++) {
      row = row + "*";
    }
    console.log(row);
  }
}

hollowSquarePatternLeftShift();

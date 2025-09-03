/*
Day 4:
 
Write a program to print the following pattern
 
Pattern 1:
 
    *
   ***
  *****
 *******
*********
 
*/

const n = 5;

console.log("Pattern 1===========>");
function starTrianglePattern1() {
  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= n - i; j++) {
      row = row + " ";
    }
    for (let k = 1; k <= 2 * i - 1; k++) {
      row = row + "*";
    }
    console.log(row);
  }
}

starTrianglePattern1();

/*

Pattern 2:
 
    *
   * *
  *   *
 *     *
*********

     11
   212223
  3132333435
 41424344454647
515253545556575859

*/

console.log("Pattern 2===========>");
function starTrianglePattern2() {
  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= n - i; j++) {
      row = row + " ";
    }
    for (let k = 1; k <= 2 * i - 1; k++) {
      if (k == 1 || i == n || k == 2 * i - 1) {
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
 
*********
 *******
  *****
   ***
    *  

*/

console.log("Pattern 3===========>");

function starTrianglePattern3() {
  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      row = row + " ";
    }
    for (let k = 1; k <= 2 * n - (2 * i - 1); k++) {
      row = row + "*";
    }
    console.log(row);
  }
}

starTrianglePattern3();

/*

Pattern 4:      

*********
 *     *
  *   *
   * *
    *
ik
111213141516171819
  21222324252627
   3132333435
    414243
     51

*/

console.log("Pattern 4===========>");

function starTrianglePattern4() {
  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      row = row + " ";
    }
    for (let k = 1; k <= 2 * n - (2 * i - 1); k++) {
      if (i == 1 || k == 1 || k == 2 * n - (2 * i - 1)) {
        row = row + "*";
      } else {
        row = row + " ";
      }
    }
    console.log(row);
  }
}

starTrianglePattern4();

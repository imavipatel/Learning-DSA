/*
Day 5:
 
Write a program to print the following pattern
 
Pattern 1:

    *
   ***
  *****
 *******
*********
 *******
  *****
   ***
    *
 
*/

console.log("Pattern 1===========>");

function starPattern1() {
  const n = 5;

  for (let i = 0; i < 2 * n - 1; i++) {
    let row = "";
    let spaceCount, starCount;
    if (i < n) {
      spaceCount = n - i - 1;
      starCount = 2 * i + 1;
    } else {
      spaceCount = i - n + 1;
      starCount = 2 * (2 * n - i - 1) - 1;
    }
    // for (let j = 0; j < spaceCount; j++) {
    //   row = row + " ";
    // }
    // for (let k = 0; k < starCount; k++) {
    //   row = row + "*";
    // }

    for (let j = 0; j < spaceCount + starCount; j++) {
      if (j < spaceCount) {
        row = row + " ";
      } else {
        row = row + "*";
      }
    }

    // const space = " ".repeat(spaceCount);
    // const stars = "*".repeat(starCount);
    // console.log(space + stars);
    console.log(row);
  }
}

starPattern1();

/*

Pattern 2:

*****
  ****
    ***
      **
        *
      **
    ***
  ****
*****


*/

console.log("Pattern 2===========>");

function starPattern2() {
  const n = 5;

  for (let i = 0; i < 2 * n - 1; i++) {
    let row = "";
    let spaceCount, starCount;
    if (i < n) {
      spaceCount = n - i - 1;
      starCount = 2 * i + 1;
    } else {
      spaceCount = i - n + 1;
      starCount = 2 * (2 * n - i - 1) - 1;
    }
    // for (let j = 0; j < spaceCount; j++) {
    //   row = row + " ";
    // }
    // for (let k = 0; k < starCount; k++) {
    //   row = row + "*";
    // }

    for (let j = 0; j < spaceCount + starCount; j++) {
      if (j < spaceCount) {
        row = row + " ";
      } else {
        row = row + "*";
      }
    }

    // const space = " ".repeat(spaceCount);
    // const stars = "*".repeat(starCount);
    // console.log(space + stars);
    console.log(row);
  }
}

starPattern2();

/*
 
Pattern 3:
 
    +
    +
    +
    +
+++++++++
    +
    +
    +
    +

*/

console.log("Pattern 3===========>");

function starPattern3() {
  const n = 9;
  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= n; j++) {
      if (i == 5 || j == 5) {
        row = row + "+";
      } else {
        row = row + " ";
      }
    }

    console.log(row);
  }
}

starPattern3();

/*

Pattern 4:      

*       *
 *     *
  *   *
   * *
    *
   * *
  *   *
 *     *
*       *

*/

console.log("Pattern 4===========>");

function starPattern4() {
  const n = 9;
  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= n; j++) {
      if (i == j || i + j == 10) {
        row = row + "*";
      } else {
        row = row + " ";
      }
    }
    console.log(row);
  }
}

starPattern4();
/*

Pattern 5:      

 ***
*   *
*   *
*   *
 ***
*   *
*   *
*   *
 ***

*/

console.log("Pattern 5===========>");

function starPattern5() {
  let n = 9; // total rows
  let width = 5; // width of each box

  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j < width; j++) {
      if (i % 4 === 0) {
        // Top or bottom border of the box (i = 0, 4, 8)
        if (j === 0 || j == width - 1) {
          row += " ";
        } else {
          row += "*";
        }
      } else {
        // Middle rows: hollow part
        if (j === 0 || j === width - 1) {
          row += "*";
        } else {
          row += " ";
        }
      }
    }
    console.log(row);
  }
}

starPattern5();

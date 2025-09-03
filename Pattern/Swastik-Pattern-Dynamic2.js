/*

**          ** ** ** ** **
**          ** ** ** ** **
**          **
**          **
**          **
** ** ** ** ** ** ** ** **
** ** ** ** ** ** ** ** **
            **          **
            **          **
            **          **
** ** ** ** **          **
** ** ** ** **          **


*/

let n = 14;
let mid = Math.floor(n / 2);

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (
      (i === 0 && (j === 0 || j >= mid)) ||
      (i === 1 && (j === 0 || j >= mid)) ||
      j === mid ||
      j === mid - 1 ||
      (j == 0 && i <= mid) ||
      (j == n - 1 && i >= mid) ||
      (j == 1 && i <= mid) ||
      (j == n - 2 && i >= mid) ||
      i === mid ||
      i === mid - 1 ||
      (i === n - 1 && (j === n - 1 || j <= mid)) ||
      (i === n - 2 && (j === n - 1 || j <= mid))
    ) {
      process.stdout.write(" * ");
    } else {
      process.stdout.write("   ");
    }
  }
  console.log("");
}

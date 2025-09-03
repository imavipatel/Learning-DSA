/*

 *  *           *  *  *  *  *  *  * 
 *  *           *  *  *  *  *  *  * 
 *  *           *  *                
 *  *           *  *                
 *  *           *  *                
 *  *  *  *  *  *  *  *  *  *  *  * 
 *  *  *  *  *  *  *  *  *  *  *  * 
                *  *           *  * 
                *  *           *  * 
                *  *           *  * 
 *  *  *  *  *  *  *           *  * 
 *  *  *  *  *  *  *           *  * 


i==Math.floor(mid/2)  && j== Math.floor(mid/2)||
       i==Math.floor(mid/2)  && j== Math.floor(mid/2)+1||
       i==Math.floor(mid/2)-1  && j== Math.floor(mid/2)||
       i==Math.floor(mid/2)-1  && j== Math.floor(mid/2)+1||
       For center star in blank space

*/

let n = 18;
let mid = Math.floor(n / 2);

for (let i = 0; i < n; i++) {
  let row = "";
  for (let j = 0; j < n; j++) {
    if (
      (i === 0 && j >= mid) ||
      (i === 1 && j >= mid) ||
      j === mid ||
      j === mid - 1 ||
      (j == 0 && i <= mid) ||
      (j == 1 && i <= mid) ||
      (j == n - 1 && i >= mid) ||
      (j == n - 2 && i >= mid) ||
      i === mid ||
      i === mid - 1 ||
      (i === n - 1 && j <= mid) ||
      (i === n - 2 && j <= mid)
    ) {
      row += " * ";
    } else {
      row += "   ";
    }
  }
  console.log(row);
}

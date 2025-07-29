/*

**                ** ** ** ** ** ** ** 
**                ** ** ** ** ** ** ** 
**                ** 
**                ** 
**                ** 
**                ** 
**                ** 
** ** ** ** ** ** ** ** ** ** ** ** ** 
** ** ** ** ** ** ** ** ** ** ** ** ** 
                  **                ** 
                  **                ** 
                  **                ** 
                  **                ** 
                  **                ** 
** ** ** ** ** ** **                ** 
** ** ** ** ** ** **                ** 

*/

function printSwastik(n) {
  if (n < 5 || n % 2 === 0) {
    console.log("Please enter an odd number ≥ 5");
    return;
  }

  const space = "   ";
  const star = "** ";

  // Top two lines
  let row1 = star;
  for (let i = 0; i < n - 2; i++) row1 += space;
  for (let i = 0; i < n; i++) row1 += star;
  console.log(row1);
  console.log(row1);

  // Upper vertical lines
  for (let j = 0; j < n - 2; j++) {
    let row = star;
    for (let i = 0; i < n - 2; i++) row += space;
    row += star;
    console.log(row);
  }

  // Middle two lines
  let midRow = "";
  for (let i = 0; i < n * 2 - 1; i++) midRow += star;
  console.log(midRow);
  console.log(midRow);

  // Lower vertical lines
  for (let j = 0; j < n - 2; j++) {
    let row = "";
    for (let i = 0; i <= n - 2; i++) row += space;
    row += star;
    for (let i = 0; i < n - 2; i++) row += space;
    row += star;
    console.log(row);
  }

  // Bottom two lines
  let bottomRow = "";
  for (let i = 0; i < n; i++) bottomRow += star;
  for (let i = 0; i < n - 2; i++) bottomRow += space;
  bottomRow += star;
  console.log(bottomRow);
  console.log(bottomRow);
}

// Example usage
const n = 9; // You can change n to any odd number >= 5
printSwastik(n);

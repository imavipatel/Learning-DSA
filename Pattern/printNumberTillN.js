console.log("In Horizontal Format ==============> \n");

function printNumberTillNOne(n) {
  let row = "";
  for (let i = 1; i <= n; i++) {
    row = row + i.toString().padStart(3, " ") + " ";
    if (i % 10 == 0) {
      row += "\n";
    }
  }

  console.log(row);
}

printNumberTillNOne(200);

console.log("In Vertical Format 1 ==============> \n");

function printNumberTillNTwo(n) {
  let row = "";
  for (let i = 1; i <= n; i++) {
    for (let j = 0; j < n; j++) {
      row = row + (i + j * 10).toString().padStart(3, " ") + " ";
    }
    row += "\n";
  }
  console.log(row);
}

printNumberTillNTwo(10);

console.log("In Vertical Format 2 ==============> \n");

function printNumberTillNThree(n) {
  let start = 1;

  while (start <= n) {
    let end = Math.min(start + 99, n);

    for (let row = 0; row < 10; row++) {
      let line = "";
      for (let col = 0; col < 10; col++) {
        let num = start + row + col * 10;
        if (num <= end) {
          line += num.toString().padEnd(4, " ");
        }
      }
      if (line.trim()) {
        console.log(line);
      }
    }

    if (end < n) {
      console.log("-".repeat(40));
    }

    start += 100;
  }
}

printNumberTillNThree(185);

console.log("\n");
console.log("In Vertical Format 3 ==============> \n");

function printNumberTillNFour(n) {
  let countNumber = 0;

  for (let row = 1; row <= n; row++) {
    let line = "";

    for (let col = 0; col < 10; col++) {
      let num = row + col * 10 + countNumber * 100;
      if (num > n) {
        break;
      }
      line += num.toString().padEnd(4, " ");
    }
    console.log(line);

    if (row % 10 === 0) {
      countNumber++;

      if (n > countNumber * 100) {
        console.log("-".repeat(40));
      } else {
        break;
      }
      row = 0;
    }
  }
}

printNumberTillNFour(187);

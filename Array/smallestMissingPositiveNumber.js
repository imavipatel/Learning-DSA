const arr = [3,4,-1,1,2,3,5,6,9]

function findMissingPositive1(arr) {
    let smallest = 1;

    for(let i =0; i < arr.length; i++){
        if(arr[i] === smallest){
            smallest++
        }
    }
    return smallest
}

function findMissingPositive2(arr) {
    let pos = arr.filter(elm => elm > 0);
    let unique = [...new Set(pos)];
    unique.sort((a, b) => a - b);

    let missing = 1;
    for(let i = 0; i < unique.length; i++) {
        if(unique[i] !== missing) {
            return missing;
        }
        missing++;
     }
     return missing;
}

function findMissingPositive3(arr) {
    const set=new Set(arr)
    let i=1;
    while(arr.length)
    {
        if(!set.has(i))
        {
            return i;

        }
        i++
    }
}

function findMissingPositive4(arr) {
    let n = arr.length;
    console.log("Initial array:", arr.slice());

    // Step 1: Place each number at its correct index (index = value - 1)
    for (let i = 0; i < n; i++) {
        while (
            arr[i] > 0 &&
            arr[i] <= n &&
            arr[arr[i] - 1] !== arr[i]
        ) {
            let correctIndex = arr[i] - 1;
            console.log(`Swapping arr[${i}] (${arr[i]}) with arr[${correctIndex}] (${arr[correctIndex]})`);
            [arr[i], arr[correctIndex]] = [arr[correctIndex], arr[i]];
            console.log("Array after swap:", arr.slice());
        }
    }

    // Step 2: Find the first place where index + 1 != value
    for (let i = 0; i < n; i++) {
        console.log(`Checking index ${i}: arr[${i}] = ${arr[i]}`);
        if (arr[i] !== i + 1) {
            console.log(`Missing positive integer found at index ${i}: ${i + 1}`);
            return i + 1;
        }
    }

    // If all positions filled correctly, the missing number is n + 1
    console.log(`All positions filled, missing positive integer is ${n + 1}`);
    return n + 1;
}

console.log(findMissingPositive1(arr))
console.log(findMissingPositive2(arr))
console.log(findMissingPositive3(arr))
console.log(findMissingPositive4(arr))
// Output:
// 7
// 7
// 7
// 7
// Explanation:
// The smallest missing positive number in the array [3, 4, -1, 1, 2, 3, 5, 6, 9] is 7, 
// as it is the first positive integer that does not appear in the array.
// The functions findMissingPositive1, findMissingPositive2, findMissingPositive3,
// and findMissingPositive4 all return the same result, 7, but they use different
// approaches to find it. 
// The first function uses a simple linear search, the second filters and sorts the array,
// the third uses a Set for quick lookups, and the fourth uses an in-place rearrangement technique
// to find the missing positive number efficiently.
// tasks without blocking the main thread, allowing for a responsive user interface.
//// This is particularly useful in web applications where user interactions 
// and network requests can occur simultaneously.
//// Example with Async/Await:
// 
// async function fetchData() {
//     console.log("Fetching data...");
//     const response = await fetch("https://api.example.com/data");
//     const data = await response.json();
//     console.log("Data received:", data);
// }
//
// console.log("Start");
// fetchData();
// console.log("End");
//
//// // Output:
// // Start
// // Fetching data...
// // End
// // Data received: { ... } (after the fetch completes)
//
// In this example, the fetchData function is asynchronous, allowing the main thread to continue executing
// while waiting for the fetch operation to complete. The console logs "End" immediately after calling
// fetchData, demonstrating how JavaScript handles asynchronous operations without blocking the main thread.        
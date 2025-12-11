// Create an array with the given numbers
let numbers = [11, 5, 8, 3, 25, 16, 31, 45, 14, 20];

// Print the array to the console
console.log("Q1.1 - Original array:");
console.log(numbers);

// Sort the numbers array in ascending order
numbers.sort(function(a, b) {
    return a - b;
});

console.log("Q1.2 - Sorted array (ascending):");
console.log(numbers);

// Add new numbers to the array
numbers.push(19, 23, 30);

// Resort array to maintain ascending order
numbers.sort(function(a, b) {
    return a - b;
});

console.log("Q1.3 - Array after inserting 19, 23, 30:");
console.log(numbers);

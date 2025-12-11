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

// Remove 8 and 31 from the numbers array
numbers = numbers.filter(function(num) {
    return num !== 8 && num !== 31;
});

console.log("Q1.4 - Array after removing 8 and 31:");
console.log(numbers);


function sequentialSearch(arr, value) {
    // Loop through each element in the array
    for (let i = 0; i < arr.length; i++) {
        // If current element equals the value, return its index
        if (arr[i] === value) {
            return i;
        }
    }
    // If no match was found, return -1
    return -1;
}

// Q1.5 - Test the function
console.log("Q1.5 - Sequential search tests:");

// Case 1: target element is found
let foundIndex = sequentialSearch(numbers, 19);
console.log("Search for 19, index:", foundIndex);

// Case 2: target element is not found
let notFoundIndex = sequentialSearch(numbers, 100);
console.log("Search for 100, index:", notFoundIndex);


function binarySearch(arr, value) {
    let left = 0;
    let right = arr.length - 1;

    // Loop while there is a valid search range
    while (left <= right) {
        // Middle index
        let middle = Math.floor((left + right) / 2);
        let middleValue = arr[middle];

        if (middleValue === value) {
            // Found the value
            return middle;
        } else if (middleValue < value) {
            // Look in the right half
            left = middle + 1;
        } else {
            // Look in the left half
            right = middle - 1;
        }
    }

    // Value not found
    return -1;
}

// Q1.6 - Test the function
console.log("Q1.6 - Binary search tests:");

// Case 1: target element is found
let binaryFoundIndex = binarySearch(numbers, 23);
console.log("Search for 23, index:", binaryFoundIndex);

// Case 2: target element is not found
let binaryNotFoundIndex = binarySearch(numbers, 999);
console.log("Search for 999, index:", binaryNotFoundIndex);

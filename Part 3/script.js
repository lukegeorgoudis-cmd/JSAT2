// Define the strings

let myString = "This is a string";
let anotherString = "   Another string"; // 3 spaces at the beginning
let hello = "Hello there!";
let myName = "Luke"; 

console.log("Q3.1 - Base strings:");
console.log("myString:", myString);
console.log("anotherString:", '"' + anotherString + '"');
console.log("hello:", hello);
console.log("myName:", myName);


// Use utility functions to find information about myString

// Length of myString
let lengthOfMyString = myString.length;
console.log("Q3.2 - Length of myString:", lengthOfMyString);

// First character of myString
let firstChar = myString.charAt(0);
console.log("Q3.2 - First character of myString:", firstChar);

// 11th character of myString
let eleventhChar = myString.charAt(10);
console.log("Q3.2 - 11th character of myString:", eleventhChar);

let slicedPart = myString.slice(5, 9);
console.log("Q3.3 - Slice (should be 'is a'):", slicedPart);

let trimmedAnother = anotherString.trim();
let substringPart = trimmedAnother.substring(7, 10);
console.log("Q3.3 - Substring (should be 'the'):", substringPart);

// Modify strings using replace()

let replacedMyString = myString.replace("string", "text");
console.log("Q3.4 - Replace 'string' with 'text':", replacedMyString);

let replacedHello = hello.replace("Hello", "Hi");
console.log("Q3.4 - Replace 'Hello' with 'Hi':", replacedHello);

// String operations: concat, trim, replace, split

// concat
let combinedString = myString + " " + hello;
console.log("Q3.5 - Concatenated string:", combinedString);

// trim
let trimmedString = anotherString.trim();
console.log("Q3.5 - Trimmed string:", '"' + trimmedString + '"');

// replace
let replacedString = myString.replace("string", "text");
console.log("Q3.5 - Replaced string:", replacedString);

// split
let splitString = trimmedString.split(" ");
console.log("Q3.5 - Split string:", splitString);

// Write a text file

let fileName = "output.txt";
let fileContent = "This is the text saved into the file.";

// Create a Blob from the string content
let fileBlob = new Blob([fileContent], { type: "text/plain" });

// Create a temporary link element
let downloadLink = document.createElement("a");
downloadLink.href = URL.createObjectURL(fileBlob);
downloadLink.download = fileName;

// Trigger the download
downloadLink.click();

console.log("Q3.7 - File created:", fileName);
console.log("Q3.7 - File content:", fileContent);

// Read the contents of a text file

document.getElementById("fileInput").addEventListener("change", function(event) {
    let file = event.target.files[0];

    let reader = new FileReader();
    reader.onload = function() {
        console.log("Q3.8 - File content read:");
        console.log(reader.result);
    };

    reader.readAsText(file);
});


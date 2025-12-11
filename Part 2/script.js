// Q2.1 - Build an object called "myMovie" with Title and Year

let myMovie = {
    title: "The longest day",
    year: 1964
};

console.log("Q2.1 - myMovie object (initial):");
console.log(myMovie);

// Q2.2 - Add rating and summary to myMovie

myMovie.rating = 5;
myMovie.summary = "World War II movie about the Normandy landings";

console.log("Q2.2 - myMovie after adding rating and summary:");
console.log(myMovie);

// Q2.3 - Change rating to 4 and year to 1962

myMovie.rating = 4;
myMovie.year = 1962;

console.log("Q2.3 - myMovie after updating rating and year:");
console.log(myMovie);

// Q2.4 - Remove the summary property from myMovie

delete myMovie.summary;

console.log("Q2.4 - myMovie after removing summary:");
console.log(myMovie);

// Define the Movie class

class Movie {
    constructor(id, title, year, rating) {
        this.id = id;
        this.title = title;
        this.year = year;
        this.rating = rating;
    }
}

let sampleMovie = new Movie(101, "Sample Movie", 2020, 4.5);
console.log("Q4.1 - Movie class sample object:");
console.log(sampleMovie);

// Create an array of at least 10 movies (unsorted IDs)

let movies = [
    new Movie(305, "Skyfall", 2012, 4.3),
    new Movie(102, "Inception", 2010, 4.8),
    new Movie(501, "Interstellar", 2014, 4.7),
    new Movie(214, "The Matrix", 1999, 4.6),
    new Movie(430, "The Dark Knight", 2008, 4.9),
    new Movie(120, "Arrival", 2016, 4.4),
    new Movie(389, "Gladiator", 2000, 4.5),
    new Movie(277, "Titanic", 1997, 4.1),
    new Movie(199, "Avatar", 2009, 4.0),
    new Movie(450, "The Godfather", 1972, 4.9)
];

console.log("Q4.2 - Movies array (unsorted by ID):");
console.log(movies);

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

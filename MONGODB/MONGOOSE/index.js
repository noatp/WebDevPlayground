const mongoose = require("mongoose")
mongoose.connect('mongodb://localhost:27017/moviesDB', {useNewUrlParser: true, useUnifiedTopology: true})
.then(function(){
    console.log("Connected to db successfully")
})
.catch(function(error){
    console.log("Could not connect to db")
    console.log(error)
})


const movieSchema = new mongoose.Schema(
    {
        title: String,
        year: Number,
        score: Number,
        rating: String
    }
)

const Movie = mongoose.model('Movie', movieSchema)
Movie.insertMany([
        { title: 'Amelie', year: 2001, score: 8.3, rating: 'R' },
        { title: 'Alien', year: 1979, score: 8.1, rating: 'R' },
        { title: 'The Iron Giant', year: 1999, score: 7.5, rating: 'PG' },
        { title: 'Stand By Me', year: 1986, score: 8.6, rating: 'R' },
        { title: 'Moonrise Kingdom', year: 2012, score: 7.3, rating: 'PG-13' }
    ])
    .then(function(data){
        console.log("Success")
        console.log(data)
    })
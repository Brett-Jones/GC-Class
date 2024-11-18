
const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3000;


app.use(cors());
app.use(express.json());

let movies = [
    { id: 1, title: "Inception", year: 2010 },
    { id: 2, title: "The Matrix", year: 1999 },
    { id: 3, title: "I Am Legend", year: 2007 },
    { id: 4, title: "Cats", year: 2019},
    { id: 5, title: "Mall Rats", year: 1995},
    { id: 6, title: "Zootopia", year: 2016},
    { id: 7, title: "Dune: Part Two", year: 2024},
    { id: 8, title: "What Dreams May Come", year: 1998},
    { id: 9, title: "Transformers One", year: 2024},
    { id: 10, title: "The Pokémon Movie", year: 1998},
    { id: 11, title: "The Lord of the Rings: The War of the Rohirrim", year: 2024 },
    { id: 12, title: "The Greatest Showman", year: 2017},
    { id: 13, title: "Sonic the Hedgehog 3", year: 2024},
    { id: 14, title: "The Star Wars", year: 1977}
]

app.get('/api/movies', (req, res) => {
    res.json(movies);
});

app.get('/api/movies/:id', (req, res) => {
    const movieId = parseInt(req.params.id);

    const movie = movies.find((m) => m.id === movieId);

    if (movie) {
        res.json(movie);
    }else {
        res.status(404).json({ message: "Movie not found"});
    }

});

app.post('/api/movies', (req, res) => {
    let newId;
    if (movies.length > 0) {
        newId = movies[movies.length - 1].id + 1;
    } else {
        newId = 1;
    }

    const newMovie = {
        id: newId,
        title: req.body.title,
        year: req.body.year
    };

    movies.push(newMovie);
    res.status(201).json({newMovie});
});

app.delete('/api/movies/:id', (req, res) => {
    const movieId = parseInt(req.params.id);

    const movieIndex = movies.findIndex((m) => m.id === movieId);

    if(movieIndex !== -1) {
        const deletedMovie = movies.splice(movieIndex, 1)[0];
        res.json(deletedMovie);
    }else {
        res.status(404).json({ message: "Movie not found"});
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
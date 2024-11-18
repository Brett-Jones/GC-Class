const express = require('express');
const cors = require('cors');

const app = express();

const PORT = 3000;

app,use(cors());

app.use(express.json());

let pets = [
    {id: 1, name: "Bella", type: "Dog", age: 2, adopted: false},
    {id: 2, name: "Ollie", type: "Dog", age: 1, adopted: true},
    {id: 3, name: "Santas Little Helper", age: 4, adopted: true},
    {id: 4, name: "S'mores", age: 5, adopted: true},
    {id: 5, name: "Todd", age: 3, adopted: false},
    {id: 6, name: "Snoopy", type: "Dog", age: 4, adopted: true},
]

const generateID = () => {
    if (pets.length === 0) {
        return 1;
    }

    const ids = pet.map(pet => pet.id);
    const maxID = Math.max(...ids);
    return maxID + 1;
}

app.get('/pets', (req, res) => {
    let filteredPets = pets;
    const type = req.query.type;

    if(type) {
        filteredPets = filteredPets.filter(pet => pet.type === type)
    }

    const adoptedStatus = req.query.adopted;

    if(adoptedStatus){
        const isAdopted = adoptedStatus;
        filteredPets = filteredPets.filter(pet => pet.adopted === )
    }

    res.json(200).json(filteredPets);
})









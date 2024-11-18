
const express = require('express');
const cors = require('cors');


const app = express();
const PORT = 3000;

app.use(cors());

const facts = [
    "Bears eat beats",
    "There are more chickens on earth than there are people.",
    "Cats are just demons in earth.",
    "Kevin cant go a single class without a typo.",
    "Japan has one vending machine for every 40 people.",
    "Bananas are berries",
    "Rome was actually build in a day",
    "PALM TREES ARE GRASS",
    "Some ladybugs are male",
    "The first animals to travel to outer space were fruit flies."
]

console.log(facts.length)

app.get('/api/facts', (req, res) =>{
    res.json(facts);
})

app.get('/api/facts/random', (req, res) => {
    const randomFact = facts[Math.floor(Math.random() * facts.length)];
    res.json({fact: randomFact});
})

app.listen(PORT, () => {
    console.log(`Server is running on http:localhost${PORT}`)
})


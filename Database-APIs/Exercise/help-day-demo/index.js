
const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

const items = [];

app.get('/', (req, res) => {
    res.json(items);
});

app.post('/add', (req, res) => {
    const newItem = req.body.item;
    items.push(newItem);
    res.json({message: 'Item added', item: newItem})
})

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});

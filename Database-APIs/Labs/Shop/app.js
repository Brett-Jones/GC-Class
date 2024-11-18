
const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(cors());

app.get('/api/data', (req, res) => {
    res.json({
        message: "Hello World",
        description: "It is response not resolve!"
    })
})

app.listen(PORT, () => {
    console.log(`Server sunning on http://localhost:${PORT}`);
});





import express from 'express';
import characterRouter from './routes/characters';
import dotenv from 'dotenv'

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/api', characterRouter);

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});













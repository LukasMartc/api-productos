import express from 'express';
import router from './routes/index.js';
import dotenv from "dotenv";

const app = express();

app.use(express.json());

dotenv.config();

app.use('/api', router);

const PORT = process.env.PORT || 4000;

app.listen(PORT, '0.0.0.0', () => console.log(`Server listening on port ${PORT}`));
import express from 'express';
import router from './routes/index.js';
import dotenv from "dotenv";

const app = express();

app.use(express.json());

dotenv.config();

app.use('/api', router);

const port = 4000;

app.listen(port, () => console.log(`Server listening on port ${port}`));
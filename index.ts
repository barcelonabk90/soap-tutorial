import express from 'express';
import { Routes } from './routes/Router';

const app = express();
const PORT = 3000;

const routes = new Routes();
app.use('/api', routes.configureRoutes());

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
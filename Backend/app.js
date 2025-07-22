import express from 'express';
import contactoRoutes from './routes/contactoRoutes.js';
import cors from 'cors';

const app= express();

app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));
console.log('CORS middleware applied')

app.use(express.json());
app.use(contactoRoutes);


export default app;
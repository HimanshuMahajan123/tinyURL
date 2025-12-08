import express from 'express';
import cors from 'cors';

const app = express();

//basic configurations
app.use(express.json()) // to parse json data
app.use(express.urlencoded({ extended: true })); // to parse urlencoded data

app.get('/', (req, res) => {
    res.send('Welcome to the TinyURL Clone API');
})

//CORS Configurations
app.use(cors({
    origin: process.env.CORS_ORIGINS?.split(',') || "http://localhost:5173",
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']  
}))



export default app;
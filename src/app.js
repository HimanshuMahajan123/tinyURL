import express from 'express';

const app = express();

//basic configurations
app.use(express.json()) // to parse json data
app.use(express.urlencoded({ extended: true })); // to parse urlencoded data

app.get('/', (req, res) => {
    res.send('Welcome to the TinyURL Clone API');
})

export default app;
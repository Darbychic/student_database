//require ("dotenv").config()

import "dotenv/config" 
import express from 'express';
import mongoose from 'mongoose'
import userRouter from './routes/userRoutes.js';
import productRouter from './routes/productRoutes.js';

const compass_string = process.env.COMPASS_STRING
const atlas_string = process.env.ATLAS_STRING
console.log("ATLAS_STRING:", atlas_string);

import dns from 'dns'
dns.setServers(['8.8.8.8', '8.8.4.4']);

mongoose.connect(atlas_string)
    .then (() => console.log('MongoDB connected'))
    .catch(err => console.log("MongoDB connection error: ", err));
    
const app = express();
const port = 8888;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('server is running');
});

app.use('/users', userRouter);
app.use('/products', productRouter);
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

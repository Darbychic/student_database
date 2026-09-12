import express from 'express';
import mongoose from 'mongoose'
import userRouter from './routes/userRoutes.js';
import productRouter from './routes/productRoutes.js';

const compass_string = "mongodb://localhost:27017/darby8_db";
const atlas_string = "mongodb+srv://darbychic26_db_user:darby_12@cluster0.ntc6c3h.mongodb.net/darby8_db?appName=Cluster0";

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

const express = require('express');
const { connectMongoDb } = require('./connection');
const app  = express();

const vendorRouter = require('./routes/vendorRoutes');
// const bodyParser = require('body-parser');
const firmRouter = require('./routes/firmRoutes');
const productRoutes = require('./routes/productRoutes');
const path = require('path');
const dotEnv = require('dotenv');
const cors = require('cors');

// cors
app.use(cors());

dotEnv.config();


const port = process.env.PORT || 8000;

app.set("view engine", "ejs");

//connection to MongoDB
connectMongoDb()

// Middleware 
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());
// app.use(express.static('public'));
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// routes 
app.use('/vendors', vendorRouter);
app.use('/firms', firmRouter);
app.use("/products",productRoutes)
app.use("/uploads", express.static('uploads'));
// starting server
app.get('/', (req, res) => {
    return res.send("<h1> Welcome to Foodie");
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})

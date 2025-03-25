const express = require('express');
const { connectMongoDb } = require('./connection');
const app  = express();
const port = 8000;
const vendorRouter = require('./routes/vendorRoutes');
const bodyParser = require('body-parser');

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

// starting server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})
const express = require('express');
const { connectMongoDb } = require('./connection');
const app  = express();
const port = 8000;
const userRouter = require('./routes/user');


app.set("view engine", "ejs");

//connection to MongoDB
connectMongoDb()

// Middleware 
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// routes 
app.use("/api/users",userRouter);

// starting server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})
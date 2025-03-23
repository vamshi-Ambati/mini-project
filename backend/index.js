const express = require('express');
const app  = express();
const port = 8000;

app.set("view engine", "ejs");

// Middleware 
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));


app.get('/', (req, res) => {
    res.send('Hello World!');
})
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})
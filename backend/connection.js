const mongoose = require('mongoose');

const connectMongoDb = async () => {
    await mongoose.connect("mongodb://localhost:27017/mini-project")
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => console.error(err));
}

module.exports = {
    connectMongoDb
}
const mongoose = require('mongoose');

const connectMongoDb = async () => {
    try {
        const mongoUrl = process.env.MONGO_URL; // Get from environment variable
        if (!mongoUrl) {
            console.error("MONGO_URL environment variable is not set.");
            return; // Exit if the variable is missing
        }

        await mongoose.connect(mongoUrl)
        .then(() => console.log("Connected to MongoDB")  ).
        catch((err) => console.error("Error connecting to MongoDB:", err));
    } catch (err) {
        console.error("Error connecting to MongoDB:", err);
    }
};
console.log("MONGO_URL:", process.env.MONGO_URL);


module.exports = {
    connectMongoDb,
};

// const mongoose  = require('mongoose');

// const connectMongoDb = async () => {
//     await mongoose.connect('mongodb://localhost:27017/foodie')
//     .then(() => console.log('Connected to MongoDB'))
//     .catch(err => console.error('Error connecting to MongoDB:', err));
// }

// module.exports = {
//     connectMongoDb,
// };
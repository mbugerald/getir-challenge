const mongoose = require('mongoose');
const app = require('./app');

require('dotenv').config() // Globally allocate .env file abstractions.

// Constants
const mongo_uri = process.env.GETIR_MONGO_URI;
const port = process.env.PORT;

// Connect to mongo database.
try {
    // Connect to mongo database.
    mongoose.connect(
        mongo_uri,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true
        },
        () => console.log('Connected to Getir mongo database!'));
} catch (err) {
    console.log(err);
}


// Launch the server and listen on port 3000.
app.listen(port);

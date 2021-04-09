const express = require('express');
const mongoose = require('mongoose');
const Records = require('./middlewares/records');
const bodyParser = require('body-parser');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

require('dotenv').config() // Globally allocate .env file abstractions.

// Constants
const app = express();
const mongo_uri = process.env.GETIR_MONGO_URI;

app.use(bodyParser.json());
app.use('/records', Records);
app.use('/', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Connect to mongo database.
mongoose.connect(
    mongo_uri,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    },
    () => console.log('Connected to Getir mongo database!'))



// Launch the server and listen on port 3000.
app.listen(3000);

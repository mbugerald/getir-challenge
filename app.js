const express = require('express');
const records = require('./middlewares/records');
const bodyParser = require('body-parser');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

const app = express();

app.use(bodyParser.json());
app.use('/records', records);
app.use('/', swaggerUi.serve, swaggerUi.setup(swaggerDocument));


module.exports = app;

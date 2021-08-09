require('dotenv').config()
const express = require('express');

const app = express();

const routes = require('./routes')
const errorHandler = require('./middlewares/errorHandler');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

app.use(errorHandler);

module.export = app;

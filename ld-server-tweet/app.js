require('dotenv').config()
const express = require('express');

const app = express();

const routes = express.Router();
const errorHandler = require('./middlewares/errorHandler');

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/', routes);

app.use(errorHandler);

module.export = app;

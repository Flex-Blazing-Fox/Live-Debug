require('dotenv').config()
const express = require('express');
const port = 3000
const app = express();

const routes = express.Router();
const errorHandler = require('./middlewares/errorHandler');

app.use(cors())
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/', routes);

app.use(errorHandler);

module.export = app;

// require('dotenv').config()

const express = require('express');
const port = 3000;
const cors = require('cors');
const app = express();
const routes = require('./routes')
// const errorHandler = require('./middlewares/errorHandler');

app.use(cors())
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(routes);

// app.use(errorHandler);


app.listen(port, ()=>{
    console.log(`app listen on port ${port}`);
})

module.exports = app;

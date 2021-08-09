require("dotenv").config();
const PORT = 3000;
const express = require("express");
const errorHandler = require("./middlewares/errorHandler");
const routers = require("./routes")

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routers)
app.use(errorHandler);

module.exports = app.listen(PORT, () => {
  console.log(`listening to port ${PORT}`);
});

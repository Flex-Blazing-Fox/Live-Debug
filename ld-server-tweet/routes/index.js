const routers = require("express").Router();
const userRoutes = require("./user");
const tweetRoutes = require("./tweet");

routers.use("/", userRoutes);
routers.use("/tweets", tweetRoutes);

module.exports = routers;

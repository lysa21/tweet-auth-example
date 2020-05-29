const express = require("express");
const apiRouter = express.Router();

apiRouter.get('/', function (req, res) {
    res.json({
        "hello": "hello"
    });
  })
module.exports = apiRouter;

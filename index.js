// api/index.js
const express = require('express');
const app = express();
const serverless = require('serverless-http');

app.get(/(.*)/, (req, res) => {
    res.redirect(`https://laisbolosecongelados.com.br${req.url}`);
});


module.exports.handler = serverless(app);

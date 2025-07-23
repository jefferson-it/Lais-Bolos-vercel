// api/index.js
const express = require('express');
const app = express();

app.get(/(.*)/, (req, res) => {
    res.redirect(301, `https://laisbolosecongelados.com.br${req.url}`);
});



app.listen(process.env.PORT || 3000, () => console.log("Server ready on port 3000."))

module.exports = app;
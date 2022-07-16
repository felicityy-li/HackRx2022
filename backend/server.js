var express = require('express');
var dotenv = require('dotenv');

dotenv.config();
var app = express();

const PORT = process.env.PORT ? process.env.PORT : 3000;

app.get('/', function (req, res) {
    res.send('Hello SeamlessRX user!');
});

app.listen(PORT, function () {
    console.log(`SeamlessRX server listening on port: ${PORT}!`);
});

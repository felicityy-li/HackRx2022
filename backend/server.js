var express = require('express');
var dotenv = require('dotenv');
var cors = require('cors');
let routes = require('./api/routes/index.route');
let DBConnectionPoolBuilder = require("./db/index.db");

dotenv.config();
var app = express();

const PORT = process.env.PORT ? process.env.PORT : 3000;

const options =  {
    methods: ['PUT', 'POST', 'GET', 'DELETE', 'OPTIONS', 'PATCH'],
    origin: [
        "http://localhost:8080",
        "localhost:8080"
    ]
}

app.use(cors(options));
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

app.use("/api", routes);

app.listen(PORT, function () {
    console.log(`SeamlessRX server listening on port: ${PORT}!`);
});

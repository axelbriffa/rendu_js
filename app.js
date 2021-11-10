const express = require('express');
const app = express()
const bcrypt = require ('bcrypt');
app.use(express.json())

const hostname ='0.0.0.0';
const port = 3000;

const server = express();

const mongoose = require("mongoose");
mongoose.connect('mongodb://mongo/apib2');

server.use(express.urlencoded());
server.use(express.json());

const postRoute = require("./routes/postRoute");
postRoute(server);

const commentRoute = require("./routes/commentRoute");
commentRoute(server);

const userRoute = require("./routes/userRoute");
userRoute(server);

server.listen(port, hostname);

app.listen(3000)
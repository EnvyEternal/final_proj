const http = require('http');
const express = require('express');
const cors = require('cors');
require('./db/dbMongo/mongoose');
const router = require('./router');
const controller = require('./socketInit');
const handlerError = require('./handlerError/handler');
const {cronDayErrorLogger} = require("./errorLogger/cronDayErrorLogger/cronDayErrorLogger");


const PORT = process.env.PORT || 5001;
const app = express();

app.use(cors());
app.use(express.json());
app.use('/public', express.static('public'));
app.use(router);
app.use(handlerError);
app.use(function () {
    cronDayErrorLogger
})

const server = http.createServer(app);
server.listen(PORT,
  () => console.log(`Example app listening on port ${ PORT }!`));
controller.createConnection(server);



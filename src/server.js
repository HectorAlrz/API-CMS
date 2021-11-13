const express = require('express');
const server = express();

const companiesRouter = require('./routers/companies')

server.use(express.json());

server.use('/companies', companiesRouter)



module.exports = server
const express = require('express');
const server = express();

const companiesRouter = require('./routers/companies')
const cors = require('cors')

server.use(express.json());

server.use(cors({
    origin:'*'
}))

server.use('/companies', companiesRouter)



module.exports = server
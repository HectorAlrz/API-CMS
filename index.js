require('dotenv').config()
const server = require('./src/server')
const dbConnect = require('./src/lib/db')
const port = process.env.PORT || 8080

dbConnect()
    .then(()=> {
        console.log('Database online');
        server.listen(3002,()=>{
            console.log('server listening on port: 3002');
        })
    })
    .catch(err=>console.log(err))
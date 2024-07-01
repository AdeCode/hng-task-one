const express = require ('express')
const app = express()
require('dotenv').config()

app.use(express.json())

app.get('/api/hello', (req, res)=>{
    res.send('Hello world')
})

app.listen(process.env.PORT, ()=>{
    console.log('App listening on port: ',process.env.PORT)
})
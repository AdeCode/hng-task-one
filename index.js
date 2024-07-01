const express = require ('express')
const { getUserData } = require('./controllers/UserController')
const app = express()
require('dotenv').config()
const userRoutes = require('./routes/userRoutes')
const cors = require('cors')

app.use(express.json())

app.use(cors({
    origin: '*',
    methods: ['GET','POST','DELETE','UPDATE','PUT','PATCH']
}
));


app.use('/api', userRoutes)

app.get('/', (req, res)=>{
    const data = {
        "location": "New York", // The city of the requester
        "greeting": "Hello, Mark!, the temperature is 11 degrees Celcius in New York"
    }
    res.send(data)
})

app.listen(process.env.PORT, ()=>{
    console.log('App listening on port: ',process.env.PORT)
})
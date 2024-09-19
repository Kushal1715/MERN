

const express = require('express');


require('dotenv').config();


require('./db/connection')
const bodyParser = require('body-parser') //to read json data




const testRoute = require('./routes/testRoute');

const productRoute = require('./routes/productRoute')


const categoryRoute = require('./routes/categoryRoute')

const authRoute = require('./routes/authRoute')


//creating an app
const app = express();

//middleware
app.use(bodyParser.json())
app.use('/api', categoryRoute)


app.use('/api', testRoute)
app.use('/api', productRoute)
app.use('/api', authRoute)

//get post put patch delete
app.get('/test', (req, res) => {
  res.send("This is an api server")
})



//using port from .env file
const port = process.env.PORT || 8000;

//listening to port
app.listen(port, () => {
  console.log(`Server started on port ${port}`)
})
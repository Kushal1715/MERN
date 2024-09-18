const express = require('express');
require('dotenv').config()

const testRoute = require('./routes/testRoute')


const app = express()

app.get('/test', (req, res) => {
  res.send("This is a api server")
})

app.use('/api', testRoute)

port = process.env.PORT || 8000;

//listen to the port
app.listen(port, () => {
  console.log(`Server started on port ${port}`)
})


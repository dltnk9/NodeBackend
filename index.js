const express = require('express')
const app = express()
const port = 3000

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://suyoung:1234@cluster0.8bkrkyt.mongodb.net/?retryWrites=true&w=majority')
.then( () => console.log('mongodb connected'))
.catch(err => console.log(err))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


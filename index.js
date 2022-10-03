const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser');
const {User} = require("./models/User");

//application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: true}));


//application/json
app.use(bodyParser.json());

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://suyoung:1234@cluster0.8bkrkyt.mongodb.net/?retryWrites=true&w=majority')
.then( () => console.log('mongodb connected'))
.catch(err => console.log(err))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/register', (req,res) => {

  const user = new User(req.body)
  user.save( (err,userInfo) => {
    if(err) return res.json({success:false,err})
    return res.status(200).json({
      success:true
    })
  })
  
})

// - app.use(express.json());
// - app.use(express.urlencoded({extended: true}));



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


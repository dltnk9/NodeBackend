const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser');
const {User} = require("./models/User");
const config = require("./config/key")
//application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: true}));


//application/json
app.use(bodyParser.json());

const mongoose = require('mongoose')
mongoose.connect(config.mongoURI)
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

- app.use(express.json());
- app.use(express.urlencoded({extended: true}));



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


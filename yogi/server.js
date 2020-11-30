const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
// const bodyParser = require('body-parser')
const mongoose = require('mongoose');
app.use(cookieParser());
app.use(express.json())
const userRouter = require('./src/backend/routes/User');

// app.use(bodyParser.json());
app.use("/user", userRouter);




mongoose.connect("mongodb+srv://userharitha:nanenpirandhen@player.94duf.mongodb.net/mernauthdb",{useNewUrlParser: true, useUnifiedTopology :true})
.then(()=>{
  console.log("Connected to database!")
})
.catch(()=>{
  console.log("Not connected!!!")
})

app.listen(5000,()=>{
  console.log("Server started!")
})



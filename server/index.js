const express = require("express")
const cors = require("cors")
const bodyParser = require("body-parser")
const mongoose = require("mongoose")
const dotenv = require("dotenv")

dotenv.config()
const app=express()
app.use(cors())
app.use(bodyParser.json())



mongoose.connect('mongodb://localhost/react-mongodb-app', { useNewUrlParser: true, useUnifiedTopology: true });
db.createUser(
    {
      user: "men",
      password: "sifre",
      roles: [
        { role: "rol", db: "hedef" },
      
      ]
    }
  )


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
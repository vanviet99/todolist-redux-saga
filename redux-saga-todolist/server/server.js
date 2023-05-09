const express = require('express')
const app = express()
const cors = require("cors")
var cookieParser = require('cookie-parser')
var bodyParser = require('body-parser')
const productrouter = require("./router/productRouter")
app.use(cors())
app.use(cookieParser())
app.use(express.json())
app.use(bodyParser.json())

app.use("/product/", productrouter)


app.listen(5001,()=>{
  console.log("server is running")
})
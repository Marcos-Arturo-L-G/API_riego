require("dotenv").config()
const express = require("express")
const cors = require("cors")
const dbconect = require('./config/mongo')
const app = express()

app.use(cors())
app.use(express.json())

const port = process.env.PORT || 3000

app.use("/api",require("./routes"))

app.listen(port, () => {
    console.log('tu app esta lista en http://localhost:'+port)
})

dbconect()
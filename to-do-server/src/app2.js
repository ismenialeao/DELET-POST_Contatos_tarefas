const express = require("express")
const app2 = express()

const call = require("./routes/index")
const contacts = require("./routes/conToRoutes")

app.use("/contatos", contacts)
app.use(express.json())
app.use("/", call)

module.exports = app2



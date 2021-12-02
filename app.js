const express = require("express")
const config = require("config")
const mongoose = require("mongoose")
require("dotenv").config()
const app = express()

app.use("/api/auth", require("./routes/auth.routes"))

PORT = config.get("port") || 5000

async function start() {
  try {
    await mongoose.connect(config.get("mongoUri"), {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
  } catch (e) {
    console.log("Server error", e.message)
    process.exit(1)
  }
}
start()
app.listen(PORT, () => {
  console.log(`started on port ${PORT}`)
})

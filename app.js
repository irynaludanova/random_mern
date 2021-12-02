const express = require("express")
const config = require("config")
const mongoose = require("mongoose")

const app = express()

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

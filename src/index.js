const express = require('express')

const app = express()

app.get("/", (request, response) => {
    return response.json({ message: "aeeaeae" })
})

app.listen(9999)
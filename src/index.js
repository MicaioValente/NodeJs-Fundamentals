const express = require('express')

const app = express()

app.get("/", (request, response) => {
    return response.json({ message: "aeeaeae" })
})

app.post("/frases", (request, response) => {
    return response.json(["d boa", "eae", "opa"])
})

app.put("/frases/:id", (request, response) => {
    return response.json(["feiao", "eae", "opa"])
})

app.patch("/frases/:id", (request, response) => {
    return response.json(["feiao", "bonitao", "opa"])
})


app.delete("/frases/:id", (request, response) => {
    return response.json(["feiao", "bonitao",])
})
app.listen(9999)
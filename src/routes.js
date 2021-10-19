const routes = require('express').router()

routes.get("/", (request, response) => {
    return response.json({ message: "aeeaeae" })
})

module.exports = routes;
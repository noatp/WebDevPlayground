const express = require("express")

const app = express()

app.use(function () {
    console.log("a new request")
})

app.listen(
    3000,
    function () {
        console.log("Listening on port 3000")
    }
)
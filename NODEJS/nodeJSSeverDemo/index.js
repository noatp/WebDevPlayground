const express = require("express")
const app = express()

// app.use(
//     function (req, res) {
//         console.log("got a new request")
//         res.send("this is expressjs responding...")
//     }
// )


app.get(
    "/api/recipe/:id",
    function (req, res) {
        const { id } = req.params
        console.log(req)
        console.log(req.params)
        console.log(id)
        res.send(`This is the response for recipeId: ${id}`)
    }
)

app.listen(3000,
    function () {
        console.log("listening on port 3000")
    }
)
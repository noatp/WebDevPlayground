const express = require("express")
const app = express()
const path = require("path")
const { allowedNodeEnvironmentFlags } = require("process")

app.set("view engine", "ejs")
app.set("views", path.join(__dirname, "/views"))

app.get("/", function (req, res) {
    res.render("home.ejs")
})

app.get("/rand", function (req, res) {
    const num = Math.floor(Math.random() * 10) + 1
    res.render("random.ejs", { rand: num })
})

app.get("/r/:subreddit", function (req, res) {
    const { subreddit } = req.params
    res.render("subreddit.ejs", { subreddit })
})

app.listen(3000, function () {
    console.log("Listening on port 3000")
})
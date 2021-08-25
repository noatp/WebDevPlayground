const express = require("express")
const app = express()
const path = require("path")
const mongoose = require("mongoose")

const Product = require("./models/product")

mongoose.connect('mongodb://localhost:27017/farmStand', {useNewUrlParser: true, useUnifiedTopology: true})
.then(function(){
    console.log("Connected to db successfully")
})
.catch(function(error){
    console.log("Could not connect to db")
    console.log(error)
})


app.set("views", path.join(__dirname, "views"))
app.set("view engine", "ejs")

app.get("/products", async function(req, res){
    const products = await Product.find({})
    res.render("products/index.ejs", {products})
})

app.get("/products/:id", async function(req, res){
    const {id} = req.params
    const product = await Product.findById(id)
    res.render("products/detail.ejs", {product})
})

app.listen(3000, function(){
    console.log("Listening on port 3000...")
})
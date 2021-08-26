const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const methodOverride = require("method-override");

const Product = require("./models/product");

mongoose
    .connect("mongodb://localhost:27017/farmStand", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(function () {
        console.log("Connected to db successfully");
    })
    .catch(function (error) {
        console.log("Could not connect to db");
        console.log(error);
    });

const categories = ["fruit", "vegetable", "dairy", "egg"];

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

app.get("/products", async function (req, res) {
    const { category } = req.query;
    if (category) {
        const products = await Product.find({ category });
        res.render("products/index.ejs", { products });
    } else {
        const products = await Product.find({});
        res.render("products/index.ejs", { products });
    }
});

app.get("/products/new", function (req, res) {
    res.render("products/new.ejs", { categories });
});

app.get("/products/:id", async function (req, res) {
    const { id } = req.params;
    const product = await Product.findById(id);
    res.render("products/detail.ejs", { product });
});

app.get("/products/:id/edit", async function (req, res) {
    const { id } = req.params;
    const product = await Product.findById(id);
    res.render("products/edit.ejs", { product, categories });
});

app.post("/products", async function (req, res) {
    const newProduct = new Product(req.body);
    await newProduct.save();
    res.redirect(`/products/${newProduct._id}`);
});

app.put("/products/:id", async function (req, res) {
    const { id } = req.params;
    await Product.findByIdAndUpdate(id, req.body, { runValidators: true });
    res.redirect(`/products/${id}`);
});

app.delete("/products/:id", async function (req, res) {
    const { id } = req.params;
    await Product.findByIdAndDelete(id);
    res.redirect("/products");
});

app.listen(3000, function () {
    console.log("Listening on port 3000...");
});

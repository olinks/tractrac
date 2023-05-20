const axios = require ("axios");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const db = require("./db/db");
require("dotenv");

const app = express();

app.use(cors());
app.use(express.json())
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", (req, res) => {
    res.send("Server Running")
})

// Login EndPoint
app.post("/Auth",async (req,res) =>{
    console.log("Auth");
    try{
        const result = await db.Auth(req.body);
        console.log(result);
        res.json(result);
    }catch (e){
        // res.status(500).json(e);
    }
});

app.get("/login/:email",async (req,res) =>{
    try{
        console.log(req.params.email);
        const result = await db.getUser(req.params.email);
        res.json(result);
    }catch (e){
        res.status(500).json(e);
    }
});

// Get User Data EndPoint
app.post("/getUserData", async (req, res) => {
    try{
        const result = await db.getUser(req.body);
        res.json(result);
    }catch(e){
        res.status(500).json(e);
    }
});

// Creating new User EndPoint
app.post("/createUser", async (req, res) => {
    try{
        const result = await db.createUser(req.body);
        res.json(result);
    }catch(e){
        res.status(500).json(e);
    }
});

// starting server and listening port
app.listen(3001,()=>{
    console.log("server running, port 3001");
});
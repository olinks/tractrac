const axios = require ("axios");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const db = require("./db/db");
require("dotenv");

const app = express();

app.use(cors());
app.use(express.json())
app.use(express.urlencoded({ extended: false }));

app.post("/login",async (req,res) =>{
    try{
        const result = await db.login(req.body);
        res.json(result);
    }catch (e){
        res.status(500).json(e);
    }
});

app.post("/getUserData", async (req, res) => {
    try{
        const result = await db.getUser(req.body);
        res.json(result);
    }catch(e){
        res.status(500).json(e);
    }
});

// starting server and listening port
app.listen(3001,()=>{
    console.log("server running, port 3001");
});
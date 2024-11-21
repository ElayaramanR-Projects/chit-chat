const express = require("express");
const mongoose = require("mongoose");
const User = require("./models/user.model");

const app = express();

app.use(express.json());

const localDB = "mongodb://localhost/api";

mongoose
  .connect(process.env.MONGODB_URI || localDB)
  .then(() => {
    console.log("Connected to MongoDB");

    app.listen(3000, () => {
      console.log("Server is running on port 3000 - Vanakkam da mapla!");
    });
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);

    process.exit(1);
  });

// Define routes
app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/api/users", async (req, res) => {
    try{
        const users = await User.find();
        res.status(200).json(users);
    }catch{
        console.error(err);
        res.status(500).send("Internal server error");
    }
  });
  

app.post("/api/users", async (req, res) => {
    try{
        const user = await User.create(req.body);
        res.status(201);
        res.send("User created");
    }
    catch(err){
        console.error(err);
        res.status(500).send("Internal server error");
    }
   
});
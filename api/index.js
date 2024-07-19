const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;


const app = express();

const port = 8000;
const cors = require('cors');
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(passport.initialize());
const jwt = require('jsonwebtoken');

mongoose.connect("mongodb+srv://gamingassassin2411:Amit2648@cluster0.evt4phz.mongodb.net/", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Database Connected");
}).catch((err) => {
    console.log("Error Connecting to MangoDB",err);
});

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
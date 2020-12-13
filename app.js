require('dotenv').config()
const express = require('express');
const app = express()
const ejs = require('ejs')
const expressLayout = require("express-ejs-layouts")
const path = require('path');
const mongoose = require('mongoose');
const PORT = process.env.PORT || 8000



// Database connection
mongoose.connect(process.env.MONGO_CONNECTION_URL, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true, useFindAndModify: true });
const connection = mongoose.connection;
connection.once('open', () => {
    console.log('Database connected...');
}).catch(err => {
    console.log('Connection failed...')
});


// set Template engine
app.use(expressLayout)
app.set('views', path.join(__dirname, '/resources/views'))
app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
    //  Static Files
app.use(express.static('public'))

// All routes
require("./routes/web")(app)
app.listen(PORT, () => {
    console.log(`Server Started at port ${PORT}`)
})
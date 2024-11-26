const mongoose = require('mongoose');
const config = require('.');

mongoose
.connect(config.databaseURL)
.then(() => {
    console.log('Database connected successfully!');
})
.catch((err) => {
    console.log('An error occurred while connecting to the database', err);
})
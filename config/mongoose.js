const mongoose = require('mongoose');

//mongoose.connect('mongodb+srv://divyagaurav:divyagaurav@cluster1.ispjeaf.mongodb.net/?retryWrites=true&w=majority');
//mongoose.connect('mongodb+srv://vikashsingh5530:vikashs5530@@cluster0.ryr31o0.mongodb.net/');
//mongoose.connect('mongodb+srv://vikashsingh5530:Vikashviku5530@cluster0.kgjavgz.mongodb.net/?retryWrites=true&w=majority');
mongoose.connect('mongodb+srv://divyagaurav:divyagaurav@cluster1.ispjeaf.mongodb.net/?retryWrites=true&w=majority');
// mongoose.connect('mongodb://localhost/habit-tracker');

const db = mongoose.connection;

//if error then pritnt message
db.on('error', console.error.bind(console, 'error in connectin DB'));

// server is up then run a message 
db.once('open', () => {
    console.log('vikash Succesfully  Connected to the DataBase');
})
module.export = db;



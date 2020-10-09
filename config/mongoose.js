const mongoose=require('mongoose');

mongoose.connect('mongodb://localhost/csv_uploadFile');

//acquire the connection to check if it is successfull
const db=mongoose.connection;

db.on('error',console.error.bind(console,'error binding to db'));


//up and running then print the message
db.once('open',function(){
    console.log('Successfully connected to database');
})
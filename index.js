const express=require('express');
const app=express();
const port =8000;

const db=require("./config/mongoose");


//
app.use('/',require('./routes'));
//make the uploads path available to browser
app.use('/uploads',express.static(__dirname+'/uploads'));

//set up the view engine
app.set('view engine','ejs');
app.set('views','./views');


app.listen(port,function(err){
    if(err){
        console.log(`Error in runnig the server:  ${err}`);
        return;
    }
    console.log(`Server is runnig on port: ${port}`);
    
});


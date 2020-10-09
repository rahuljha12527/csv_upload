const User = require("../models/user");
const fs=require('fs');
const path=require('path');
const { use } = require("../routes");

module.exports.home=function(req,res){
    return res.render('home',{
      title:"Home"
    });
}

module.exports.update=async function(req,res){

    try{
        let user=await User.findById(req.params.id);
        User.uploadedAvavtar(req,res,function(err){
          if(err){
              console.log('*****Multer Error',err)
          }

          console.log(req.file);
          if(req.file){
              if(user.avatar){
                fs.unlinkSync(path.join(__dirname,'..',user.avatar));

              }
              //this is saving the path of the uploaded file into the avatar field in the user
              user.avatar=User.avatarPath+'/'+req.file.filename;

              
          }
             user.save();
             return res.redirect('back');

        });   
}catch(err){
    return res.redirect('back');
 }
}
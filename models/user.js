const mongoose = require("mongoose");

const multer = require("multer");
const path = require("path");

const AVATAR_PATH = path.join("/uploads/users/avatar");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    avatar: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

let storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "..", AVATAR_PATH));
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + "-" + Date.now());
  },
});

//static methods
userSchema.static.uploadedAvatar = multer({ storage: storage });
userSchema.static.avatarPath=AVATAR_PATH;
    


const User = mongoose.model("User", userSchema);
module.exports = User;

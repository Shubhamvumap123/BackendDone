const path = require("path");
const multer = require("multer");
const req = require("express/lib/request")

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(__dirname,"../gallary"));
    },
    filename: function (req, file, cb) {
      const uniquePrefix = Date.now()
      cb(null, uniquePrefix + "-" + file.originalname);
    },
  });
  
  // const upload = multer({ storage: storage })

  const fileFilter = (req, file, callback) => {
    // The function should call `callback` with a boolean
    // to indicate if the file should be accepted
  
    if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
      // To accept the file pass `true`, like so:
      callback(null, true);
    } else {
      // To reject this file pass `false`, like so:
      callback(new Error("Incorrect mime type"), false);
    }
  };   // The function should call `cb` with a boolean
    // to indicate if the file should be accepted
const options = { 
    storage ,
    fileFilter,
    limits:{
        fileSize: 1024 * 1024 * 5,
    },
};

const uploads = multer(options);
module.exports = uploads;


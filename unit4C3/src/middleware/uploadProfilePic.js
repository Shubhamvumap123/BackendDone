const path = require("path");
const multer = require("multer");
const req = require("express/lib/request")

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null,path.join(__dirname,"..uploadedFolder"))
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, file.fieldname + '-' + uniqueSuffix)
    }
  })
  const options ={
      storage,
      fileFilter,
      limits:{
          fileSize: 1024*1024*5,
      },
  },
  const upload = multer(options)
//   const upload = multer({ storage: storage })
module.exports=upload;98y
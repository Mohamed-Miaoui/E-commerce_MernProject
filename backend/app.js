var express = require('express');
var cookieParser = require('cookie-parser');
var app = express();
const multer = require("multer")
const path = require("path")
const cors = require("cors")




//app routes
var productsRouter = require('./routes/Prodcut');
var userRouter = require('./routes/User');

app.use(express.json());
app.use(cors())
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());




//app routes
app.use('/product', productsRouter);
app.use('/user',userRouter)


//Image Storage config (local)
const storage = multer.diskStorage({
  destination: './upload/images',
  filename:(req,file,cb)=>{
    //unique name file
    return cb(null,`${file.fieldname}_${Date.now()}_${path.extname(file.originalname)}`)
  }
}) 
const upload = multer({storage:storage})

//Creating Upload Endpoint For Images
app.use('/images',express.static('upload/images'))
//product is the field name
app.post("/upload",upload.single('product'),(req,res)=>{
  res.json({
    success : 1,
    image_url : `http://localhost:8000/images/${req.file.filename}` //we can acces the img threw this url
  })
})


module.exports = app;

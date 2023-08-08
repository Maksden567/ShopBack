const express = require('express')
const mongoose = require('mongoose');
const userRouter = require('./routes/Auth/auth.js')
const productRouter = require('./routes/ProductRouter/ProductRouter.js')
const multer = require('multer')

const app = express()
mongoose.connect('mongodb+srv://den:Maksden567@cluster0.ui3z7lx.mongodb.net/').then(()=>console.log('Hello')).catch((e)=>console.log(e))

app.use(express.json())
app.use('/auth',userRouter)
app.use('/',productRouter)


const storage = multer.diskStorage({
    destination:(__,_,cb)=>{
        cb(null, 'my-uploads')
    },
    filename:(__,file,cb)=>{
        cb(null,file.originalname)
    }
})
const fileFilter = (req,file, cb) => {
  
    if(file.mimetype === "image/png" || 
    file.mimetype === "image/jpg"|| 
    file.mimetype === "image/jpeg"){
        cb(null, true);
    }
    else{
        cb(null, false);
    }
 }

const upload = multer({storage:storage,fileFilter:fileFilter})
app.use('/my-uploads',express.static('my-uploads'))
app.post('/upload',upload.single('image'),(req,res)=>{

    let filedata = req.file;    
    if(!filedata)
        return res.json
        ("Ошибка при загрузке файла");

    return res.json({
        url:`/my-uploads/${req.file.originalname}`
    })
   
})

app.listen (5000,()=>{
console.log('Server start')
})



   


const express=require('express')
const mongoose=require('mongoose')
const app=express()
const router=require("./routes/book-routes")
const cors=require('cors')

app.use(express.json())
app.use(cors())
app.use("/books",router)

mongoose.connect(
    "mongodb+srv://raj123:nepal123@cluster0.ndxkw.mongodb.net/bookstore?retryWrites=true&w=majority")
.then(()=>console.log("Connected to Db"))
.then(()=>{
    app.listen(5000)
}).catch((err)=>console.log(err))
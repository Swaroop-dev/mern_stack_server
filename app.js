//dependices

const mongoose=require("mongoose")
const express=require("express")
const bodyParser=require("body-parser")
const  cors=require("cors")
const cookieParser=require("cookie-parser")
require('dotenv').config()

//my routes
const authRoutes=require("./routes/auth")
const userRoutes=require("./routes/user")
const categoryRoutes=require("./routes/category")
const productRoutes=require("./routes/product")
const orderRoutes=require("./routes/order")


//database connection
const app=express()
const port=process.env.PORT||8000

mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology:true,
    useCreateIndex:true
}).then(()=>{
    console.log('DB CONNECTED')
}).catch(()=>{
    console.log('..IS CONNECTING')
})


//routes

app.use(bodyParser.json())
app.use(cors())
app.use(cookieParser())

app.use("/api",authRoutes)
app.use("/api",userRoutes)
app.use("/api",categoryRoutes)
app.use("/api",productRoutes)
app.use("/api",orderRoutes)

app.listen(port,()=>{
  console.log(`app is running at port number ${port}`)})
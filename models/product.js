const mongoose=require("mongoose")
const category = require("./category")
const {ObjectId}=mongoose.Schema

const ProductSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        maxlength:32
    },
    description:{
        type:String,
        required:true,
        maxlength:1000,
    },
    price:{
        type:Number,
        required:true
    },
    sold:{
        type:Number,
        default:0
    },
    stock:{
        type:Number,
        min:0
    },
    photo:{
       type:Buffer,
       contentType:String
    },
    category:{
        type:ObjectId,
        ref:category
    }
},{timestamps:true})


module.exports=mongoose.model("product",ProductSchema)
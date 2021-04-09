const Category=require("../models/category")
const { json } = require("body-parser")


exports.getCategoryById=(req,res,next,id)=>{
    Category.findById(id).exec((err,cate)=>{
        if(err){
            return res.status(400),json({
                error:"category with that id is not found"
            })

        }
        req.category=cate
    })
    next()
}

exports.createCategory=(req,res)=>{
    const category=new Category(req.body)
    category.save((err,category)=>{
        if(err){
            return res.status(400),json({
                          error:"not able to create new category"
                        })
            }
            res.json({category})
        })
   
}

exports.getCategory=(req,res)=>{
   return res.json(req.category)
}


exports.getAllCategory=(req,res)=>{
    Category.find().exec((err,categories)=>{
        if(err){
            return res.status(400),json({
                          error:"not able to find category"
                        })
            }
            res.json({categories})
    })
}

exports.updateCategory=(req,res)=>{
    // const category=req.category
    // category.name=req.body.name
    // category.save((err,updatedCategory)=>{

    // })
    Category.findByIdAndUpdate(
        {_id:req.category._id},
        {$set:req.body},
        {new:true,useFindAndModify:false},
        (err,updatedCategory)=>{
            if(err){
                return res.status(400).json({
                    error:"could not update in the database"
                })
            }
            res.json(updatedCategory)
        }
        )

}

exports.removeCategory=(req,res)=>{
    Category.findByIdAndDelete(
        {_id:req.category._id},
        (err,category)=>{
            if(err){
                return res.status(401).json({
                    error:"could not delete the category"
                })
            }
            res.json({
                message:"category deleted from the database"
            })
        }
        )
}
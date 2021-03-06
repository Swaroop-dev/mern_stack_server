const express=require("express")
const router=express.Router()


const {getProductById,
       createProduct,
       getProduct,
       photo,
       deleteProduct,
       updateProduct,
       getAllProducts,
       getAllUniqueCategories
       }=require("../controllers/product")

const {isAdmin,
       isSignedIn,
       isAuthenticated
      }=require("../controllers/auth")
const {getUserById}=require("../controllers/user")

//params
router.param("userId",getUserById)
router.param("productId",getProductById)

//routes
router.post("/product/create/:userId",
             isSignedIn,
             isAuthenticated,
             isAdmin,
             createProduct
            )
            
router.get("/product/:productId",getProduct)
router.get("/product/photo/:productId",photo)
router.get("/products",getAllProducts)
router.get("/product/categories",getAllUniqueCategories)
router.put("/product/:productId/:userId",
           isSignedIn,
           isAuthenticated,
           isAdmin,
           updateProduct
          )
router.delete("/product/:productId/:userId",
               isSignedIn,
               isAuthenticated,
               isAdmin,
               deleteProduct
             )
module.exports=router
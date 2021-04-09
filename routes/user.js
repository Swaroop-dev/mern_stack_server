
const express=require("express")
const router=express.Router()

//from controllers
const {isSignedIn,
       isAuthenticated,
       isAdmin
      }=require("../controllers/auth")
const {getUserById,
       getUser,
       updateUser,
       userPurchaseList
      }=require("../controllers/user")

router.param("userId",getUserById)

router.get("/user/:userId",
           isSignedIn,
           isAuthenticated,
           getUser
          )
router.put("/user/:userId",
           isSignedIn,
           isAuthenticated,
           updateUser
           )
router.get("order/:orderId",
            isSignedIn,
            isAuthenticated,
            userPurchaseList
          )




module.exports=router
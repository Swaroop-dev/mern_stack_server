const express=require("express")
const router=express.Router()
const {isAdmin,
       isAuthenticated,
       isSignedIn
      }=require("../controllers/auth")

const {getUserById,
       pushOrderInPurchaselist
      }=require("../controllers/user")

const {updateStock}=require("../controllers/product")
const {getOrderById,
       createOrder,
       getAllOrders,
       updateStatus,
       getOrderStatus
      }=require("../controllers/order")


//params
router.param("userId",getUserById)
router.param("orderId",getOrderById)


router.post("order/create/:userId",
              isSignedIn,
              isAuthenticated,
              pushOrderInPurchaselist,
              updateStock,
              createOrder
            )

router.get("order/all/:userId",
            isSignedIn,
            isAuthenticated,
            isAdmin,
            getAllOrders
          )

//status of the order

router.get("/order/status/:userId",isSignedIn,isAuthenticated,getOrderStatus)
router.put("order/:orderId/status/:userId",isSignedIn,isAuthenticated,isAdmin,updateStatus)
module.exports=router
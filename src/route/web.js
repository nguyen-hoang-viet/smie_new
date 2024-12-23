const express = require('express')
<<<<<<< HEAD
const { getHomePage, getReport, getView, getShipFeeAndDiscount, 
        getBill, postOrdersToDB, deleteOrders, getOrders, addReport, deleteReport, 
        checkRedis, getDataFromRedis} = require("../controllers/homeController");
=======
const { getHomePage, getReport, getView, getshipFeeAndDiscount, 
        getBill, postOrdersToDB, deleteOrders, getOrders, addReport} 
        = require("../controllers/homeController");
>>>>>>> 5d5b9451b2d0777f4527ed88501faeb7e2d8efb5

const router = express.Router()

router.get("/", getHomePage)

router.get("/report", getReport);

router.get("/view", getView);

<<<<<<< HEAD
router.get("/shipFeeAndDiscount", getShipFeeAndDiscount);
=======
router.get("/shipFeeAndDiscount", getshipFeeAndDiscount);
>>>>>>> 5d5b9451b2d0777f4527ed88501faeb7e2d8efb5

router.get("/bill", getBill);

router.post("/add-order-to-DB", postOrdersToDB);

router.post("/delete-orders-DB", deleteOrders);

router.get("/get-orders-from-DB", getOrders);

router.post("/add-to-report", addReport);

<<<<<<< HEAD
router.post("/delete-report-DB", deleteReport);

router.get("/check-redis", checkRedis);

router.get("/get-data-from-redis", getDataFromRedis);

=======
>>>>>>> 5d5b9451b2d0777f4527ed88501faeb7e2d8efb5

module.exports = router

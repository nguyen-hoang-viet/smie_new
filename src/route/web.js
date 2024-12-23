const express = require('express')
const { getHomePage, getReport, getView, getshipFeeAndDiscount, 
        getBill, postOrdersToDB, deleteOrders, getOrders, addReport} 
        = require("../controllers/homeController");

const router = express.Router()

router.get("/", getHomePage)

router.get("/report", getReport);

router.get("/view", getView);

router.get("/shipFeeAndDiscount", getshipFeeAndDiscount);

router.get("/bill", getBill);

router.post("/add-order-to-DB", postOrdersToDB);

router.post("/delete-orders-DB", deleteOrders);

router.get("/get-orders-from-DB", getOrders);

router.post("/add-to-report", addReport);

router.post("/delete-report-DB", deleteReport);

router.get("/check-redis", checkRedis);

router.get("/get-data-from-redis", getDataFromRedis);

module.exports = router

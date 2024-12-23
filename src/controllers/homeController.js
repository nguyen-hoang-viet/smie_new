<<<<<<< HEAD
const { getAllData, addOrdersToDB, deleteOrdersFromDB, 
    getOrdersFromDB, addToReport, deleteReportDB, checkDataInRedis,
    getDataInRedis } = require("../service/CRUDservice");
=======
const connection = require('../config/database')
const { getAllData, addOrdersToDB, deleteOrdersFromDB, getOrdersFromDB, addToReport } = require("../service/CRUDservice");
>>>>>>> 5d5b9451b2d0777f4527ed88501faeb7e2d8efb5

const getHomePage = async (req, res) => {
    res.render("home.ejs");
};

const getReport = async (req, res) => {
    let results = await getAllData();

    return res.render("report.ejs", { listData: results });
};

const getView = async (req, res) => {
    res.render("view.ejs");
};

<<<<<<< HEAD
const getShipFeeAndDiscount = async (req, res) => {
=======
const getshipFeeAndDiscount = async (req, res) => {
>>>>>>> 5d5b9451b2d0777f4527ed88501faeb7e2d8efb5
    res.render("shipFeeAndDiscount.ejs");
};

const getBill = async (req, res) => {
    res.render("bill.ejs");
};

const postOrdersToDB = async (req, res) => {
    // console.log(">>>>>>> req.body:", req.body)
    // console.log("----------------------------------")

    let { table_id, dishName, quantity, date, time } = req.body;
    await addOrdersToDB(table_id, date, time, dishName, quantity);
    //res.send("Create done")
    res.redirect("/");
}

const deleteOrders = async (req, res) => {
    await deleteOrdersFromDB();
    //res.send("Create done")
    res.redirect("/");
}

const getOrders = async (req, res) => {
    let results = await getOrdersFromDB();
    res.json(results);
<<<<<<< HEAD
=======
    //console.log("Show data", results);
    //res.redirect("/");
>>>>>>> 5d5b9451b2d0777f4527ed88501faeb7e2d8efb5
}

const addReport = async (req, res) => {
    let { tableNumber, date, time, code, nameDish, quantity, totalCheck, shipFee, discountCheck } = req.body;
    await addToReport(tableNumber, date, time, code, nameDish, quantity, totalCheck, shipFee, discountCheck);
    //res.send("Create done")
    res.redirect("/bill");
}

<<<<<<< HEAD
const deleteReport = async (req, res) => {
    await deleteReportDB();
    //res.send("Create done")
    res.redirect("/report");
}

//-------------------------------Redis-------------------------------

const checkRedis = async (req, res) => {
    let size = await checkDataInRedis();
    //console.log(size)
    res.json({size})
}

const getDataFromRedis = async (req, res) => {
    let data = await getDataInRedis();
    //console.log(size)
    res.json(data)
}

=======
>>>>>>> 5d5b9451b2d0777f4527ed88501faeb7e2d8efb5
module.exports = {
    getHomePage,
    getReport,
    getView,
<<<<<<< HEAD
    getShipFeeAndDiscount,
=======
    getshipFeeAndDiscount,
>>>>>>> 5d5b9451b2d0777f4527ed88501faeb7e2d8efb5
    getBill,
    postOrdersToDB,
    deleteOrders,
    getOrders,
<<<<<<< HEAD
    addReport,
    deleteReport,
    checkRedis,
    getDataFromRedis
=======
    addReport
>>>>>>> 5d5b9451b2d0777f4527ed88501faeb7e2d8efb5
};
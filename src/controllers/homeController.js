const connection = require('../config/database')
const { getAllData, addOrdersToDB, deleteOrdersFromDB, getOrdersFromDB, addToReport } = require("../service/CRUDservice");

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

const getshipFeeAndDiscount = async (req, res) => {
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
    //console.log("Show data", results);
    //res.redirect("/");
}

const addReport = async (req, res) => {
    let { tableNumber, date, time, code, nameDish, quantity, totalCheck, shipFee, discountCheck } = req.body;
    await addToReport(tableNumber, date, time, code, nameDish, quantity, totalCheck, shipFee, discountCheck);
    //res.send("Create done")
    res.redirect("/bill");
}

module.exports = {
    getHomePage,
    getReport,
    getView,
    getshipFeeAndDiscount,
    getBill,
    postOrdersToDB,
    deleteOrders,
    getOrders,
    addReport
};
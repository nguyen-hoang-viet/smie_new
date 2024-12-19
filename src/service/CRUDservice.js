const connection = require('../config/database')

const getAllData = async () => {
    let [results, fields] = await connection.query('select * from report')
    return results
}

const addOrdersToDB = async (table_id, date, time, dishName, quantity) => {
    let [results, fields] = await connection.query(
        `
        INSERT INTO orderList (table_id, date, time, dishName, quantity) 
        VALUES (?, ?, ?, ?, ?)
        `, [table_id, date, time, dishName, quantity]
    );
}

const deleteOrdersFromDB = async () => {
    let [results, fields] = await connection.query(
        `
        TRUNCATE TABLE orderList
        `
    );
}

const getOrdersFromDB = async () => {
    let [results, fields] = await connection.query(
        `
        SELECT table_id, dishName, quantity, date, time 
        FROM orderList
        ORDER BY dishName
        `
    );
    return results;
}

const addToReport = async (tableNumber, date, time, code, nameDish, quantity, totalCheck, shipFee, discountCheck) => {
    let [results, fields] = await connection.query(
        `
        INSERT INTO report (table_id, date, hour, product_code, product_name, quantity, total, ship_fee, discount) 
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
        `, [tableNumber, date, time, code, nameDish, quantity, totalCheck, shipFee, discountCheck]
    );
}

module.exports = {
    getAllData,
    addOrdersToDB,
    deleteOrdersFromDB,
    getOrdersFromDB,
    addToReport
}
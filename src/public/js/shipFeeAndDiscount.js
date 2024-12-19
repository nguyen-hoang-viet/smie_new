let listDishOrdered = [];
let listQuantity = [];
let dateOfTable = [];
let timeOfTable = [];
let tableID


window.addEventListener('load', () => {

    const storedData = localStorage.getItem('orderData');

    if (storedData) {
        const orderData = JSON.parse(storedData)

        tableID = orderData.tableID
        listDishOrdered = orderData.listDishOrdered
        listQuantity = orderData.listQuantity
        dateOfTable = orderData.dateOfTable;
        timeOfTable = orderData.timeOfTable;

        console.log(listDishOrdered);
    }
    localStorage.removeItem('orderData');
})

const btnThanhToan = document.getElementById('btn-thanh-toan');
const shipFeeInput = document.getElementById('ship-fee');
const discountCodeInput = document.getElementById('discount-code');
const noteInput = document.getElementById('note');

function openBillWindow(){
    const shipFee = Number(shipFeeInput.value);
    const discountCode = Number(discountCodeInput.value);
    const noteOfBill = noteInput.value

    localStorage.setItem('orderData', JSON.stringify({listDishOrdered, listQuantity, dateOfTable, timeOfTable, tableID, shipFee, discountCode, noteOfBill}))

    window.close()

    // Open bill popup window
    const billWindow = window.open(
        '/bill', 
        'billWindow', 
        `width=1000, height=800`
    );

    // (Optional) Focus the bill window
    billWindow.focus();

}
// Click button 'Thanh toan' to open bill window
btnThanhToan.addEventListener('click', function(e) {
    openBillWindow()
});
// Press Enter to open bill window
window.addEventListener('keydown', function(e) {
    if (e.key === 'Enter'){
        openBillWindow()
    }
});

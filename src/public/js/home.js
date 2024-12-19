
const dishAndPrice = [
    ["TV", "Tokbokki thường", 25000],
    ["KB", "Kimbap thường", 18000],
    ["KBC", "Kimbap chiên", 22000],
    ["TSTTM", "Trà sữa truyền thống (M)", 20000],
    ["TSTTL", "Trà sữa truyền thống (L)", 28000],
    ["TSTXM", "Trà sữa thái xanh (M)", 20000],
    ["TSTXL", "Trà sữa thái xanh (L)", 28000],
    ["TDM", "Trà dâu (M)", 20000],
    ["TDL", "Trà dâu (L)", 25000],
    ["TĐM", "Trà đào (M)", 20000],
    ["TĐL", "Trà đào (L)", 25000],
    ["TCM", "Trà chanh (M)", 12000],
    ["TCL", "Trà chanh (L)", 15000], 
    ["CV", "Mì Cay viên xịn", 37000],
    ["CKCV", "Mì Cay Kimchi viên", 37000],
    ["CHS", "Mì Cay Hải sản", 45000],
    ["CKCHS", "Mì Cay kimchi hải sản", 47000],
    ["CBM", "Mì Cay Bò Mỹ", 45000],
    ["CKCBM", "Mì Cay Kimchi Bò Mỹ", 47000],
    ["CĐB", "Mì Cay Đặc Biệt", 52000],
    ["MTĐRC", "Mì tương đen rau củ", 35000],
    ["CXXTN", "Chân gà sả tắc có xương (N)", 30000],
    ["CXXTL", "Chân gà sả tắc có xương (L)", 65000],
    ["CXSTN", "Chân gà sốt thái có xương (N)", 30000],
    ["CXSTL", "Chân gà sốt thái có xương (L)", 65000],
    ["RXXTN", "Chân gà sả tắc rút xương (N)", 35000],
    ["RXXTL", "Chân gà sả tắc rút xương (L)", 70000],
    ["RXSTN", "Chân gà sốt thái rút xương (N)", 35000],
    ["RXSTL", "Chân gà sốt thái rút xương (L)", 70000],
    ["CST", "Cóc sốt thái", 15000],
    ["GR", "Gan rim", 18000],
    ["BX", "Bắp xào", 20000],
    ["V", "Bò viên chiên", 10000],
    ["MV", "Mực viên", 12000],
    ["CVTC", "Cá viên bọc trứng cút", 15000],
    ["CVSM", "Cá viên sốt mayo", 15000],
    ["KTCXM", "Khoai tây chiên (xí muội)", 18000],
    ["KTCPM", "Khoai tây chiên (phomai)", 18000],
    ["XXĐ", "Xúc xích đức", 10000],
    ["PMQ", "Phomai que", 10000],
    ["CB1", "Combo 1", 35000],
    ["CB2", "Combo 2", 40000],
    ["CB3", "Combo 3", 55000],
    ["CB4", "Combo 4", 55000],
    ["KBL", "Khô bò", 38000], 
    ["KG", "Khô gà", 28000],
    ["BTT", "Bánh tráng trộn", 20000],
    ["MTĐT", "Mì tương đen trứng", 35000],
    ["THQ", "Tokbokki HQ", 27000],
    ["TPM", "Tokbokki phomai", 35000],
    ["TOM", "Trà ổi hồng (M)", 20000],
    ["TOL", "Trà ổi hồng (L)", 25000],
    ["XXĐT", "Xx đức thêm", 5000],
    ["XXVT", "Xx thường thêm", 3000],
    ["MIT", "Mì thêm", 12000],
    ["NKCT", "Nấm kim châm", 5000],
    ["VT", "Viên thêm", 3000],
    ["KCT", "Kimchi thêm", 6000],
    ["PDT", "Pudding", 4000],
    ["TCT", "Trân châu trắng", 4000],
    ["TDT", "Thạch dừa", 4000],
    ["CHIP", "Chipchip", 30000],
    ["KGK", "Khô gà kí", 320000],
    ["KBK", "Khô bò kí", 650000],
    ["CS", "Chiên sốt", 10000],
    ["KBT", "Khô bò thêm", 7000],
    ["KGT", "Khô gà thêm", 6000],
    ["PTK", "Phồng tôm thêm", 5000],
    ["MT", "Mì tokbokki", 35000],
    ["PMT", "Phô mai thêm", 10000],
    ["CTT", "Chả cá thường", 5000],
    ["CHT", "Chả cá hàn", 5000],
    ["V1", "Tôm viên", 10000],
    ["V2", "Cá viên", 10000],
    ["CB1S1", "Combo 1 sốt mắm", 45000],
    ["CB1S2", "Combo 1 sốt mắm me", 45000],
    ["CB1S3", "Combo 1 sốt bơ tỏi", 45000],
    ["CB2S1", "Combo 2 sốt mắm", 50000],
    ["CB2S2", "Combo 2 sốt mắm me", 50000],
    ["CB2S3", "Combo 2 sốt bơ tỏi", 50000],
    ["CB3S1", "Combo 3 sốt mắm", 65000],
    ["CB3S2", "Combo 3 sốt mắm me", 65000],
    ["CB3S3", "Combo 3 sốt bơ tỏi", 65000],
    ["TT", "Trứng thêm", 5000],
    ["Coca", "Coca", 13000],
    ["PS", "Pepsi", 13000],
    ["7UP", "7 Up", 13000],
    ["KĐ", "Không độ", 13000],
    ["NO", "Number One", 13000],
    ["ST", "Sting", 13000],
    ["NTT", "Nem tré trộn", 50000],
    ["TVM", "Trà vải (M)", 20000],
    ["TVL", "Trà vải (L)", 25000],
    ["TCC", "Trứng cút chiên", 10000],
    ["MTPM", "Mì tokbokki phomai", 40000],
    ["GBST", "Gân bò sốt thái", 70000],
    ["NS", "Nước suối", 7000],
    ["CB2ST", "Combo 2 món sốt thái", 70000],
    ["CCRR", "Chả cá rau răm", 20000],
    ["CCT", "Chả cá trộn", 25000],
    ["TXM", "Trà xoài (M)", 20000],
    ["TXL", "Trà xoài (L)", 25000],
    ["GSC", "Gà sốt cay", 35000],
    ["GSPM", "Gà sốt phomai", 35000],
    ["GSCPM", "Gà sốt cay phủ phomai", 40000],
    ["GV", "Gà popcorn chiên giòn", 27000]
    
];

var dateAndTimeOfTable = []

const listDishOrdered = [];
const listQuantity = [];


// Generate 16 tables
for (let i = 1; i <= 16; i++) {
    let table = document.createElement('div');
    //Thêm class "table" để thực hiện CSS
    table.classList.add('table');
    if (i === 15) {
        table.textContent = "Shopee";
    }
    else if (i === 16){
        table.textContent = "Giao đi";
    }
    else 
        table.textContent = i;

    table.addEventListener('click', function() {
        document.getElementById('order').style.display = 'block';
        if (i === 15) {
            document.getElementById('tableNumber').textContent = "Shopee";
        }
        else if (i === 16) {
            document.getElementById('tableNumber').textContent = "Giao đi";
        }
        else
            document.getElementById('tableNumber').textContent = i;
    });

    document.getElementById('tables').appendChild(table);
}

//----------------------------------------------------------------------------------------

function updateTableCompleteColors() {
    const tables = document.querySelectorAll('.table');

    tables.forEach(table => {
        const tableNumber = table.textContent;
        if (tableNumber && tableOrders[tableNumber] && tableOrders[tableNumber].length > 0) {
            table.classList.add('ordered-table'); // Add class when there are orders
        } else {
            table.classList.remove('ordered-table'); // Remove class when there are no orders
        }
    });
}

function convertTableNameToTabID(tableNumber){
    //Because tableNumber is "Shopee" similar number 16 of tableID
    let tableID = 0

    if (tableNumber === 'Shopee'){
        tableID = 15
    }
    else if (tableNumber === 'Giao đi'){
        tableID = 16
    }
    else {
        tableID = parseInt(tableNumber)
    }
    return tableID
}

// Initialize an empty object to store orders by table number
var tableOrders = {}; // kiểu dữ liệu ở đây là object

// Function to add an order item
function addOrderItem(tableNumber, dishName, quantity) {
// update listDishOrdered and listQuantity
    
    let tableID = convertTableNameToTabID(tableNumber)

    if (!listDishOrdered[tableID]){
        listDishOrdered[tableID] = []
    }
    listDishOrdered[tableID].push(dishName);

    if (!listQuantity[tableID]){
        listQuantity[tableID] = []
    }
    listQuantity[tableID].push(1);
//-----------------------------------------------------------
    if (!tableOrders[tableNumber]) {
        tableOrders[tableNumber] = [];
    }

    tableOrders[tableNumber].push({
        dishName: dishName,
        quantity: quantity
    });

    //const confirmation = confirm(tableOrders[tableNumber].length);

    if (tableOrders[tableNumber].length === 1){
        const now = new Date();
        const dateString = now.toLocaleDateString();
        const timeString = now.toLocaleTimeString();

        //const confirmation = confirm(now);
        
        if (!dateAndTimeOfTable[tableID]){
            dateAndTimeOfTable[tableID] = []
        }
        dateAndTimeOfTable[tableID][0] = dateString;
        dateAndTimeOfTable[tableID][1] = timeString;        
    }

    showOrderItems(tableNumber);
    updateTableCompleteColors(); // Call to update table colors
}

// Function to update order items display for the current table
function showOrderItems(tableNumber) {
    let indexOfQuantityInput = 0

    const orderItemsContainer = document.getElementById('order-items');
    orderItemsContainer.innerHTML = ''; // Clear existing items

    if (tableNumber && tableOrders[tableNumber]) {
        tableOrders[tableNumber].forEach(orderItem => {
            const orderItemElement = document.createElement('div');
            orderItemElement.classList.add('order-item');

            // Show name 
            const dishNameElement = document.createElement('span');
            dishNameElement.textContent = orderItem.dishName;
            orderItemElement.appendChild(dishNameElement);  

            // button decrease
            const descreaseButton = document.createElement('button');
            descreaseButton.type = 'descrease';
            descreaseButton.textContent = '-';
            descreaseButton.addEventListener('click', function() {

                for (let indexOfTableOrder = 0; indexOfTableOrder < tableOrders[tableNumber].length; indexOfTableOrder++){
                    if (tableOrders[tableNumber][indexOfTableOrder].dishName === orderItem.dishName){
                            checkIndex = indexOfTableOrder
                            break
                    }
                }

                const quantityValue = document.getElementById('quantityValue' + checkIndex.toString()).value;                

                for (let indexOfTableOrder = 0; indexOfTableOrder < tableOrders[tableNumber].length; indexOfTableOrder++){
                    if (tableOrders[tableNumber][indexOfTableOrder].dishName === orderItem.dishName){
                        tableOrders[tableNumber][indexOfTableOrder].quantity = Number(quantityValue) - 1
                        listQuantity[convertTableNameToTabID(tableNumber)][indexOfTableOrder] = Number(quantityValue) - 1
                        showOrderItems(tableNumber)
                    }
                }
            })
            orderItemElement.appendChild(descreaseButton);

            // show quantity
            const quantityInput = document.createElement('input');
            quantityInput.type = 'text';
            quantityInput.id = 'quantityValue' + indexOfQuantityInput.toString();
            quantityInput.value = orderItem.quantity;
            orderItemElement.appendChild(quantityInput)
            
            // button increase
            const increaseButton = document.createElement('button');
            increaseButton.type = 'increase';
            increaseButton.textContent = '+';
            increaseButton.addEventListener('click', function() {

                for (let indexOfTableOrder = 0; indexOfTableOrder < tableOrders[tableNumber].length; indexOfTableOrder++){
                    if (tableOrders[tableNumber][indexOfTableOrder].dishName === orderItem.dishName){
                            checkIndex = indexOfTableOrder
                            break
                    }
                }

                const quantityValue = document.getElementById('quantityValue' + checkIndex.toString()).value;                

                for (let indexOfTableOrder = 0; indexOfTableOrder < tableOrders[tableNumber].length; indexOfTableOrder++){
                    if (tableOrders[tableNumber][indexOfTableOrder].dishName === orderItem.dishName){
                        tableOrders[tableNumber][indexOfTableOrder].quantity = Number(quantityValue) + 1
                        listQuantity[convertTableNameToTabID(tableNumber)][indexOfTableOrder] = Number(quantityValue) + 1
                        showOrderItems(tableNumber)
                    }
                }
            })
            orderItemElement.appendChild(increaseButton);
            
            // button delete
            const removeButton = document.createElement('button');
            removeButton.type = 'removeButton';
            removeButton.textContent = 'Xóa';
            removeButton.addEventListener('click', function() {
                removeOrderItem(tableNumber, orderItem.dishName);
            });
            orderItemElement.appendChild(removeButton);
            indexOfQuantityInput += 1;
            orderItemsContainer.appendChild(orderItemElement);
        });
    }
}

// Function to remove an order item
function removeOrderItem(tableNumber, dishName) {
    if (tableOrders[tableNumber]) {
        const orderItemIndex = tableOrders[tableNumber].findIndex(item => item.dishName === dishName);
        if (orderItemIndex !== -1) {
            tableOrders[tableNumber].splice(orderItemIndex, 1);

            //
            let tableID = convertTableNameToTabID(tableNumber)

            listDishOrdered[tableID].splice(orderItemIndex, 1);
            listQuantity[tableID].splice(orderItemIndex, 1);
            showOrderItems(tableNumber);
        }
    }
    updateTableCompleteColors(); // Call to update table colors
}

// Event listener for table selection
document.addEventListener('click', function(event) {
    if (event.target.classList.contains('table')) {
        const tableNumber = event.target.textContent;
        document.getElementById('tableNumber').textContent = tableNumber;
        showOrderItems(tableNumber); // Display orders for the selected table
    }
});

//--------------------------------------------------------------------------------------
const dishInput = document.getElementById('dish');
const suggestionsList = document.getElementById('autocorrect');

function suggestions() {

    const currentInput = dishInput.value.toLowerCase();
    const danhSachGoiYMoi = [];
    for (let index = 0; index < dishAndPrice.length; index++) {
        const monAn = dishAndPrice[index][1];
        const code = dishAndPrice[index][0];
        if (monAn.toLowerCase().includes(currentInput.toLowerCase()) 
            || code.toLowerCase().startsWith(currentInput.toLowerCase())) {
            danhSachGoiYMoi.push(monAn);
        }
    }

    suggestionsList.innerHTML = "";
    suggestionsList.style.display = "inline";
    for (const monAn of danhSachGoiYMoi.slice(0, 8)) { // Giới hạn 8 gợi ý
        const li = document.createElement('li');
        li.textContent = monAn;

        // Add functionality similar to submit button click
        li.addEventListener('click', function() {
            const tableNumber = document.getElementById('tableNumber').textContent;
            const dishName = monAn; // Use the suggested dish name
            //const noteForDish = ''

            const quantity = 1
            
            // Call the function to add the order item (assuming `addOrderItem` exists)
            addOrderItem(tableNumber, dishName, quantity);
            
            // Clear the dish input field
            dishInput.value = '';

            // Hide the suggestions list (optional)
            suggestionsList.innerHTML = "";
            suggestionsList.style.display = "none";
        });
        
        suggestionsList.appendChild(li);
    }
}

dishInput.addEventListener('input', suggestions);

document.addEventListener("click", function(e) {
    if (!e.target.matches("#dish") && suggestionsList.style.display === "inline") {
        suggestionsList.style.display = "none";
    }
});

//------------------------------------------------------------------------------------------

const btnThanhToan = document.getElementById('btn-thanh-toan');

function completeBill(){
    const tableNumber = document.getElementById('tableNumber').textContent;

    // Confirmation popup before proceeding
    const confirmation = confirm("Bạn có chắc chắn muốn thanh toán cho bàn " + tableNumber + " không?");

    if (!confirmation) {
    // User cancels, do nothing
        return;
    }
    // remove data of the table has been paid
    tableOrders[tableNumber] = []
    showOrderItems(tableNumber);
    updateTableCompleteColors(); // Call to update table colors

    let tableID = convertTableNameToTabID(tableNumber)

    localStorage.setItem('orderData', JSON.stringify({listDishOrdered, listQuantity, dateAndTimeOfTable, tableID}))

    // Open shipFeeAndDiscount popup window
    const shipFeeAndDiscountWindow = window.open(
        '/shipFeeAndDiscount', 
        'shipFeeAndDiscountWindow', 
        `width=500,
        height=400,
        top=${(screen.availHeight - 400) / 2},
        left=${(screen.availWidth - 500) / 2}`
    );

    // (Optional) Focus the bill window
    shipFeeAndDiscountWindow.focus();

    dateAndTimeOfTable[tableID] = []
    listDishOrdered[tableID] = []
    listQuantity[tableID] = []
}
// Click button 'Thanh toan' to complete bill
btnThanhToan.addEventListener('click', function(e) {
    completeBill()
});

//------------------------------------------------------------------------------------------

// open view page to review the bill
const btnView = document.getElementById('btn-view');

btnView.addEventListener('click', function(e) {
    const tableNumber = document.getElementById('tableNumber').textContent;

    let tableID = convertTableNameToTabID(tableNumber)

    localStorage.setItem('orderData', JSON.stringify({listDishOrdered, listQuantity, tableID}))

    // Open view popup window
    const viewWindow = window.open(
        '/view',
        'viewWindow',
        `width=800,
        height=600,
        top=${(screen.availHeight - 600) / 2},
        left=${(screen.availWidth - 800) / 2}`
    );

    // (Optional) Focus the view window
    viewWindow.focus();
});

//------------------------------------------------------------------------------------------

app.listen(port, () => {
    console.log(`Server listening on http://localhost:${port}`);
});
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
    ["GV", "Gà popcorn chiên giòn", 27000],
    ["KEO", "Kẹo nougat", 35000]
];

let priceDish;
let listDishOrdered = [];
let listQuantity = [];
let tableNumber


const btnDownload = document.getElementById('btn-download');
const btnPrint = document.getElementById('btn-print');
const tbody = document.querySelector('tbody');
const total = document.getElementById('total');

// Danh sách sản phẩm mẫu (thay thế bằng dữ liệu thực)
let products = [];

// Hiển thị danh sách sản phẩm
function renderProducts() {
    let totalAmount = 0;
    tbody.innerHTML = '';
    products.forEach((product, index) => {
        const row = tbody.insertRow();
        const cell1 = row.insertCell();
        cell1.textContent = product.name;
        cell1.style.textAlign = 'left';

        row.insertCell().textContent = product.quantity;

        const cell2 = row.insertCell();
        cell2.textContent = product.price.toLocaleString({ style: 'currency', currency: 'VND' });
        cell2.style.textAlign = 'right';

        const amount = product.quantity * product.price;
        totalAmount += amount;

        const cell3 = row.insertCell();
        cell3.textContent = amount.toLocaleString({ style: 'currency', currency: 'VND' });
        cell3.style.textAlign = 'right';

    });
    total.textContent = totalAmount.toLocaleString({ style: 'currency', currency: 'VND' });
}

window.addEventListener('load', () => {

    const storedData = localStorage.getItem('orderData');
    if (storedData) {
        const orderData = JSON.parse(storedData)

        tableNumber = orderData.tableID
        listDishOrdered = orderData.listDishOrdered
        listQuantity = orderData.listQuantity

        for (let indexOfListDishOrdered = 0; indexOfListDishOrdered < listDishOrdered[tableNumber].length; indexOfListDishOrdered++){
            for (let indexOfdishAndPrice = 0; indexOfdishAndPrice < dishAndPrice.length; indexOfdishAndPrice++){
                if (listDishOrdered[tableNumber][indexOfListDishOrdered] === dishAndPrice[indexOfdishAndPrice][1]){
                    priceDish = dishAndPrice[indexOfdishAndPrice][2];
                    break;
                }
            }
            products.push({name: listDishOrdered[tableNumber][indexOfListDishOrdered], quantity: listQuantity[tableNumber][indexOfListDishOrdered], price: priceDish});
        }
        localStorage.removeItem('orderData');
        renderProducts();
    }
})

window.addEventListener('keydown', function(e) {
    if (e.key === 'Escape'){
        window.close()
    }
});



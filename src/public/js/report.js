document.getElementById("exportExcel").addEventListener("click", function () {
    // Chuyển dữ liệu bảng thành mảng
    const tableData = [];
    const rows = document.querySelectorAll("table tr");
    
    rows.forEach((row) => {
        const rowData = [];
        row.querySelectorAll("th, td").forEach((cell) => {
            rowData.push(cell.innerText.trim());
        });
        tableData.push(rowData);
    });

    // Tạo workbook và worksheet
    const wb = XLSX.utils.book_new();
    const ws = XLSX.utils.aoa_to_sheet(tableData);
    XLSX.utils.book_append_sheet(wb, ws, "Bảng thống kê");

    // Xuất file Excel
    XLSX.writeFile(wb, "BaoCaoThongKe.xlsx");
});
<<<<<<< HEAD


document.getElementById("deleteReport").addEventListener("click", async () => {
    try {
            fetch("/delete-report-DB", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
            });
        } catch (error) {
            console.error("Error deleting report:", error);
            alert("An error occurred while deleting the report.");
        }
});

=======
>>>>>>> 5d5b9451b2d0777f4527ed88501faeb7e2d8efb5

function renderTableData(){
    const tableBody = document.getElementById("first-section-tb");

    for( let i = 0; i < 50; i++){
        const dataIndex = i + 1;

        tableBody.insertAdjacentHTML("beforeend", `<tr class="first-section-tr">
        <td class="first-section-td">Table data ${dataIndex} info</td>
    </tr>`);
    };
};

renderTableData();
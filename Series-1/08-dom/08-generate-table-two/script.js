// 06-dom/08-generate-table-two/script.js - 6.8: creating a table (2)

(() => {

    // your code here
    
    let table = document.createElement("TABLE");
    let target = document.getElementById('target');

    table.setAttribute("id", "myTable");
    target.appendChild(table);
    
    for (let i = 1; i <= 10; i++) {
        window[`row${i}`] = table.insertRow(i-1);
        for (let x = 0; x < 10; x++) {
            window[`cell${i}_${x}`] =  window[`row${i}`].insertCell(x);
            window[`cell${i}_${x}`].innerHTML = i * (x+1);
        }
    }
})();

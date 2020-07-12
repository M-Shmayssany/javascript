// 06-dom/07-generate-table-one/script.js - 6.7: creating a table (1)


(() => {

    // your code here
    let table = document.createElement("TABLE");
    let target = document.getElementById('target');
    
    table.setAttribute("id", "myTable");
    target.appendChild(table);
    
    for (let i = 1; i <= 10; i++) {
        window[`row${i}`] = table.insertRow(i-1);
        window[`cell${i}`] =  window[`row${i}`].insertCell(-1);
        window[`cell${i}`].innerHTML = 'Cell';
    }
})();

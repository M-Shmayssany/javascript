// 02-maths/04-sort-numbers/script.js - 2.4: Sorting the numbers

(() => {

    // to get the value of an input: document.getElementById("element-id").value

    document.getElementById("run").addEventListener("click", () => {

        // your code here
        let numberToSort = document.getElementById('numbers').value;
        let arrayToSort = numberToSort.split(',');
        let sortedArray = arrayToSort.sort((a, b)=>{
                return a - b;
            });
        alert(sortedArray);
    });

})();

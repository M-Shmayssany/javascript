// 09-misc/07-storage-clicker/script.js - 9.7: storage clicker


(() => {

    // your code here
    document.getElementById('increment').addEventListener('click', ()=>{
        if (localStorage.clickcount) {
            localStorage.clickcount = Number(localStorage.clickcount)+1;
        } else {
            localStorage.clickcount = 1;
        }
        document.getElementById("target").innerHTML = localStorage.clickcount;
    });
    //localStorage.clickcount = 0;
})();

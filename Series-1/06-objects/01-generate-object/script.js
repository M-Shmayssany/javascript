// 06-objects/01-generate-object/script.js - 6.1: genererate an object


(() => {
    // your code here

    document.getElementById('run').addEventListener('click', ()=>{
        let obj = new Object();
        obj.lastname = "Shmayssany";
        obj.firstname = "Mohamed";
        obj.age = 44;
        obj.city = "florennes";
        obj.country = "Belgique"; 
        console.log(obj);
    });
})();

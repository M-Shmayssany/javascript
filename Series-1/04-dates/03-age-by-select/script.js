
// 04-dates/03-age-by-select/script.js - 4.3: calculate the age


(() => {
    
    // your code here
    document.getElementById("run").addEventListener("click", ()=>{
       let day = document.getElementById("dob-day").value;
        let month = document.getElementById("dob-month").value;
        let year = document.getElementById("dob-year").value;
        let dob_asdate = new Date(year, month, day);
        let today = new Date();
        let mili_dif = Math.abs(today.getTime() - dob_asdate.getTime()) - 31.25;
        let age = (mili_dif / (1000 * 3600 * 24 * 365.25));
        
        let ageYears = parseInt(age);
        alert(ageYears + " years and ");

    });
})();

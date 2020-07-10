
// 04-dates/03-age-by-select/script.js - 4.3: calculate the age


(() => {
    
    // your code here
    document.getElementById("run").addEventListener("click", ()=>{
        let now = new Date();
        let nowDays = (((now.getTime()/1000)/60)/60)/24;
        let dobDay = document.getElementById("dob-day").value;
        let dobMonth = document.getElementById("dob-month").value;
        let dobYear = document.getElementById("dob-year").value;
        let Day = parseInt(dobDay);
        let YearA = parseInt(dobYear);
        let ageYear;
        if(YearA >= 1970){
            ageYear = 1970 - YearA;
        }else{
            ageYear = YearA - 1970;
        }
// TODO: complite this exercise
        Day += parseInt(dobMonth) * 30;
        Day += parseInt(ageYear) * 365;
        console.log(ageYear*365*24*60*60*100);
    })

})();

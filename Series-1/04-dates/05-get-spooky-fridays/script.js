
// 04-dates/05-get-spooky-fridays/script.js - 4.5: calcul des vendredi 13


(() => {

    // your code here
    document.getElementById("run").addEventListener("click", ()=>{
        let userYear = document.getElementById("year").value;
        let date = new Date(userYear);
        let numDays;
        let num = 0;
        for(i=0; i <= 12; i++){
            numDays = new Date(date.getFullYear(), i, 0).getDate();
            date.setMonth(i);
            for(s = 1; s <= numDays; s++){
                date.setDate(s);
                if(date.getDay() == 5 && date.getDate() == 13){
                    num++;
                }
            }
        }
        alert("there is " + num + " in the year " + userYear);

    });

    
    
})();

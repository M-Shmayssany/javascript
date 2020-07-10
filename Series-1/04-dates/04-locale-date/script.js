
// 04-dates/04-locale-date/script.js - 4.4: textual date


(() => {

    // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"

    // your code here
    function addZero(i) {
        if (i < 10) {
            i = "0" + i;
        }
        return i;
    }
    let date = new Date();
    let weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let FDate = weekday[date.getDay()] + " " + date.getDate() + " " + month[date.getMonth()] + " " + date.getFullYear() + ", " + addZero(date.getHours()) + "h" + addZero(date.getMinutes());
    document.getElementById("target").innerHTML = FDate;
})();

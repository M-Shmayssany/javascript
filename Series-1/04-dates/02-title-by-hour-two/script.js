
// 04-dates/02-title-by-hour-two/script.js - 4.2: text according to the hour (2)


(() => {

    // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"

    // your code here
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    
    if (hours >= 17 && minutes >=30){
        text = "Good evening";
    }else{
        text = "Hello";
    }
    document.getElementById("target").innerHTML = text;
})();


// 04-dates/01-title-by-hour-one/script.js - 4.1: text according to the hour (1)


(() => {

    // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"

    // your code here
    let date = new Date();
    let hours = date.getHours();

    if (hours < 18){
        text = "Hello";
    }else{
        text = "Good evening";
    }
    document.getElementById("target").innerHTML = text;
})();

// 09-misc/02-typewriter-effect/script.js - 9.2: typewriter effect


(() => {

    // your code here
    let pos = 0;
    let speed = 300;
    let data = document.getElementById('target').textContent;
    let sactionSpan = document.getElementsByClassName('material');
    document.getElementById('target').innerText = "";
    setTimeout(typeWriter, speed);

    function randNumber(val){
        return Math.floor(Math.random() * val) + 1;   
    }
    function typeWriter() {
        if (pos < data.length) {
            document.getElementsByClassName('type-cursor').innerText = '';
            document.getElementById("target").innerHTML += data.charAt(pos);
            console.log(data.charAt(pos));
            pos++;
            setTimeout(typeWriter, randNumber(speed));
        } 
    } 

})();

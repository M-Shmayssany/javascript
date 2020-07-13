// 09-misc/06-guess-number/script.js - 9.6: guess the number

(() => {

    // your code here
    let X = 0;
    let Y = 0;
    let state = 0;

    function randomIntInterval(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    X =randomIntInterval(1, 100);

    let answer = prompt("Guess the number:");
    while(answer != X){
        Y++;
        if(answer < X){
            alert("higher");
        }else{
            alert("lower");
        }
        answer = prompt("Guess the number:");
    }
    alert(`that's it! you needed ${Y} guesses`);


})();

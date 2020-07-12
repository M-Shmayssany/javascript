// 06-dom/09-match-password-one/script.js - 6.9: password verification (1)


(() => {

    // your code here
    document.getElementById('run').addEventListener('click', ()=>{
        let passOne = document.getElementById('pass-one');
        let passTwo = document.getElementById('pass-two');
        if(passOne.value===passTwo.value){
            console.log("ok");
        }else{
            passOne.style.borderColor = "red";
            passTwo.style.borderColor = "red";
        }
    });
})();

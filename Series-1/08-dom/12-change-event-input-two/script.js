// 06-dom/12-change-event-input-two/script.js - 6.12: change event (2)


(() => {

    // your code here
    let fieldPass = document.getElementById('pass-one');
    let validity = document.getElementById('validity');
    let charCountStatus = ""
    let numberCountStatus = "";
    fieldPass.addEventListener('keyup', ()=>{
        let content = fieldPass.value;
        if(content.match(/[0-9]/gi)){
            if(content.match(/[0-9]/gi).length >= 2){
                numberCountStatus = 'ok';
            }else{
                numberCountStatus = 'Not ok';
            }
        }
        
        if((fieldPass.value).length >= 8){
            charCountStatus = 'ok';
        }else{
            charCountStatus = 'Not ok';
        }
        if(numberCountStatus == 'ok' && charCountStatus == 'ok'){
            validity.innerText = `ok`;
        }else{
            validity.innerText = `Not ok`;
        }
        
    });
})();

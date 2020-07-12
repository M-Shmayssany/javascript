// 06-dom/11-change-event-input-one/script.js - 6.11: change event (1)


(() => {

    // your code here
    let fieldPass = document.getElementById('pass-one');
    let counter = document.getElementById('counter');
    let limit = 10;
    fieldPass.addEventListener('keyup', ()=>{ 
        fieldPass.setAttribute('maxlength', limit)
        numCounter = (fieldPass.value).length; 
        counter.innerText = `${numCounter}/${limit}`;
    });
})();

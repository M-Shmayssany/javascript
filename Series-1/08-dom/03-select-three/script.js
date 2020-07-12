// 06-dom/03-select-three/script.js - 6.3: select multiple elements by css selector


(() => {

    // your code here
    const targets = document.getElementsByClassName('target');
    
    for (let target of targets) {
        target.innerHTML = "owned";
    }        
})();

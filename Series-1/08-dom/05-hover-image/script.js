// 06-dom/05-hover-image/script.js - 6.5: image hover


(() => {

    // your code here
    let imgCon = document.getElementsByTagName('img');
    imgCon[0].addEventListener('mouseover', ()=>{
        let dataHover = imgCon[0].getAttribute('data-hover');
        imgCon[0].setAttribute('src', dataHover);
    });;
    

    
    
})();

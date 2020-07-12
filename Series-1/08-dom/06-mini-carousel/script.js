// 06-dom/06-mini-carousel/script.js - 6.6: mini carousel


(() => {

    let gallery= [
        "../../_shared/img/bell.svg",
        "../../_shared/img/clock.svg",
        "../../_shared/img/compass.svg",
        "../../_shared/img/lemon.svg",
        "../../_shared/img/map.svg",
    ];

    // your code here
    let imgTag = document.getElementsByTagName('img')[0];
    let counter = 0;
    document.getElementById('next').addEventListener('click', ()=>{
        if(counter < 5){
            imgTag.setAttribute('src', gallery[counter]);
            counter++;
        }else{
            imgTag.setAttribute('src', gallery[0])
            counter = 1;
        }
    });

})();

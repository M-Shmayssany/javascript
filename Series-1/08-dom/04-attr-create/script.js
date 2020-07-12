// 06-dom/04-attr-create/script.js - 6.4: manipulating attributes and creating elements


(() => {

    // your code here
    let dataImage = document.getElementById('source').getAttribute('data-image');
    let newImg = document.createElement('img');
    newImg.setAttribute("src", dataImage);
    document.getElementById('target').appendChild(newImg);
    document.getElementById('source').remove();

})();

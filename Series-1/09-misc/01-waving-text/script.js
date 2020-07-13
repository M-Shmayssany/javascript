// 09-misc/01-waving-text/script.js - 9.1: waving text


(() => {

    // your code here
    function addStyle(styles) { 
        let css = document.createElement('style'); 
        css.type = 'text/css';
        if (css.styleSheet){  
            css.styleSheet.cssText = styles; 
        }else{  
            css.appendChild(document.createTextNode(styles));
            document.getElementsByTagName("head")[0].appendChild(css); 
        }
    }
    let styleTarget = "display: flex;justify-content: center;postition: relative; -webkit-box-reflect: below -12px linear-gradient(transparent, rgba(0, 0, 0, 0.2));";
    let txt = "In code we trust Becode.org";
    let txtArr = txt.split("");
    let target = document.getElementById("target");

    target.innerText = "";
    txtArr.forEach((arr, i) =>{
        if(arr === " "){
            node = document.createElement("div");
            textnode = document.createTextNode("-");
            node.appendChild(textnode);
            node.setAttribute('class', 'opt')
            node.setAttribute('style', `--i:${i+1};`);
            target.appendChild(node);
        }else{
            node = document.createElement("div");
            textnode = document.createTextNode(arr);
            node.appendChild(textnode);
            node.setAttribute('class', 'wave');
            node.setAttribute('style', `--i:${i+1};`);
            target.appendChild(node);
        } 
    })

    target.setAttribute('style', styleTarget);


    let styles = '.wave { postition: relative; display: inline-block; text-transform: uppercase; animation: animate 1s ease-in-out infinite; animation-delay: calc(0.1s * var(--i));}'; 
    styles += ' .opt { opacity: 0; }'; 
    styles += ' @keyframes animate{0%{ transform: translateY(0px); font-size: 16px} 20%{ transform: translateY(-20px); font-size: 24px} 40%{ font-size: 28px;}  50%{ font-size: 26px;} 60%,100%{ transform: translateY(0px); font-size: 18px}}'; 
    window.onload = function() { addStyle(styles) }; 

})();

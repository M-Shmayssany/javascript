
// 02-maths/01-calculator-one/script.js - 2.1: calculator1

(() => {
    // to get the value of an input: document.getElementById("element-id").value
    function getFieldsCal(op){
        let opOne =new Number(document.getElementById("op-one").value);
        let opTwo = new Number(document.getElementById("op-two").value);
        if(op == "+"){
            return opOne + opTwo;
        }else if(op == "-"){
            return opOne - opTwo;
        }else if(op == "*"){
            return opOne * opTwo;
        }else if(op == "/"){
            return opOne / opTwo;
        }
    }
    
    document.getElementById("addition").addEventListener("click", function() {
        // perform an addition

        alert(getFieldsCal("+"));
    });

    document.getElementById("substraction").addEventListener("click", function() {
        // perform an substraction
        alert(getFieldsCal("-"));
    });

    document.getElementById("multiplication").addEventListener("click", function() {
        // perform an multiplication
        alert(getFieldsCal("*"));
    });

    document.getElementById("division").addEventListener("click", function() {
        // perform an division
        alert(getFieldsCal("/"));
    });
})();

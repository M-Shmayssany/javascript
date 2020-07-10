
// 02-maths/02-calculator-two/script.js - 2.2: calculatrice (2)

(() => {
    // to get the value of an input: document.getElementById("element-id").value

    const performOperation = operation => {
        // perform the operation
        let opOne = new Number(document.getElementById("op-one").value);
        let opTwo = new Number(document.getElementById("op-two").value);
        
        switch(operation){
            case "addition":
                alert( opOne + " + " + opTwo + " = " + (opOne + opTwo));
                break;
            case "substraction":
                alert( opOne + " - " + opTwo + " = " + (opOne - opTwo));
                break;
            case "multiplication":
                alert( opOne + " * " + opTwo + " = " + (opOne * opTwo));
                break;
            case "division":
                alert( opOne + " / " + opTwo + " = " + (opOne / opTwo));
                break;
            
        }
    };

    Array.from(document.querySelectorAll("button.operator")).forEach($btn =>
        $btn.addEventListener(
            "click",
            () => (performOperation($btn.id), false),
        ),
    );
})();

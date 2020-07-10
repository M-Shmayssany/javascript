
// 02-maths/05-factorial/script.js - 2.5: Factorial

(() => {
    
    // to get the value of an input: document.getElementById("element-id").value

    document.getElementById("run").addEventListener("click", () => {

        // your code here
        let toFact =new Number(document.getElementById("number").value);
        let f = [];

        function factorial (n) {
            if (n == 0 || n == 1)
                return 1;
            if (f[n] > 0)
                return f[n];
                return f[n] = factorial(n-1) * n;
        }
        alert("answer: " + factorial(toFact));
    });

})();

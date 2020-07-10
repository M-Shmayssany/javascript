
// 02-maths/03-even-square/script.js - 2.3: squares and pairs


(() => {

    document.getElementById("run").addEventListener("click", () => {
        let arr = [];
        // your code here
        for(i=1;i<=21;i++){
            arr.push("the squared of " + i + " is " + Math.pow(i,2));
        }
        let text = "";
        for(i=0; i<arr.length; i++){
            text += arr[i] + '\n';
        }
        alert(text);
    });

})();

// 05-arrays/09-rand-array-stats/script.js - 5.9: random & statistics array

(() => {

    // your code here
    let array = [];
    //let array = [40, 32, 76, 3, 87, 12, 89, 65, 17, 26];
    // generate random number from 1 to 100
    function rand100(){
        return Math.floor(Math.random() * 100) + 1;  
        }

    //populate the array with random numbers
    function multiRand(n){
        for (i=0; i<n;i++){
            array.push(rand100());
        }
    }
    console.log(multiRand(10));

    document.getElementById('run').addEventListener('click', ()=>{
        for(i=0; i < array.length; i++){
            document.getElementById(`n-${i+1}`).innerHTML = array[i];
        }
        document.getElementById('min').innerHTML = Math.min(...array);
        document.getElementById('max').innerHTML = Math.max(...array);
        const arrSum = arr => arr.reduce((a,b) => a + b, 0);
        const arrAvg = arr => arr.reduce((a,b) => a + b, 0) / arr.length;
        document.getElementById('sum').innerHTML = arrSum(array);
        document.getElementById('average').innerHTML = arrAvg(array);
    });
})();

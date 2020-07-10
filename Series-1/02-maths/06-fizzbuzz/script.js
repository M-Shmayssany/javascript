
// 02-maths/06-fizzbuzz/script.js - 2.6: fizzbuzz

(() => {

    // your code here
for(i=1; i<=100; i++){
    if((i%3) == 0 && (i%5) == 0){
        console.log(i + " fizzbuzz\n");
    }else if((i%3) == 0 && (i%5) != 0){
        console.log(i + " fizz\n");
    }else if((i%5) == 0 && (i%3) != 0 ){
        console.log(i + " buzz\n");
    }else{
        console.log(i + " \n");
    }
}
})();

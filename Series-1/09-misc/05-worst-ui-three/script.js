// 09-misc/05-worst-ui-three/script.js - 9.5: worst user interface (3) : phone slot

(() => {

    // your code here
    let partOne = document.getElementById('part-one');
    let partTwo = document.getElementById('part-two');
    let partThree = document.getElementById('part-three');
    let partFour = document.getElementById('part-four');
    let partOneNum = 460;
    let partTwoNum = 0;
    let partThreeNum = 0;
    let partFourNum = 0;

    function randomIntInterval(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
    function add0toString(val){
        if(val < 10){
            return '0' + val;

        }else{
            return val;
        }
    }
    let collactionBTN = document.getElementsByTagName('button');
    [...collactionBTN].forEach((elem)=> {
        elem.addEventListener('click',()=>{
            switch(elem.id){
                case "fix-part-one":
                    partOneNum = randomIntInterval(460, 499);
                    partOne.value = partOneNum;
                    break;
                case "fix-part-two":
                    partTwoNum = randomIntInterval(0, 99);
                    partTwo.value = add0toString(partTwoNum);
                    break;
                case "fix-part-three":
                    partThreeNum = randomIntInterval(0, 99);
                    partThree.value = add0toString(partThreeNum);
                    break;
                case "fix-part-four":
                    partFourNum = randomIntInterval(0, 99);
                    partFour.value = add0toString(partFourNum);
                    break;
                default:
                    break;
            }
            document.getElementById('target').innerText = '+' + partOneNum + add0toString(partTwoNum) + add0toString(partThreeNum) + add0toString(partFourNum);
    
        });
    });
})();

// 09-misc/04-worst-ui-two/script.js - 9.4: worst user interface (2) : phone clicker


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
            case "part-one":
                if(partOneNum < 499){
                    partOneNum++;
                }else{
                    partOneNum = 460;
                }
                break;
            case "part-two":
                if(partTwoNum < 99){
                    partTwoNum++;
                }else{
                    partTwoNum = 0;
                }
                break;
            case "part-three":
                if(partThreeNum < 99){
                    partThreeNum++;
                }else{
                    partThreeNum = 0;
                }
                break;
            case "part-four":
                if(partFourNum < 99){
                    partFourNum++;
                }else{
                    partFourNum = 0;
                }
                break;
            default:
                console.log("I don't know");
                break;
        }
        document.getElementById('target').innerText = '+' + partOneNum + add0toString(partTwoNum) + add0toString(partThreeNum) + add0toString(partFourNum);
        partOne.innerText = partOneNum;
        partTwo.innerText = add0toString(partTwoNum);
        partThree.innerText = add0toString(partThreeNum);
        partFour.innerText = add0toString(partFourNum); 

        });
    });
    
})();

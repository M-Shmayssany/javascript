// 05-arrays/14-bird-names-generator/script.js - 5.14: Bird names generator in French


(() => {
    const birds = [
        {name: "mouette", fem: true},
        {name: "corbeau"},
        {name: "mésange", fem: true},
        {name: "hibou"},
        {name: "buse", fem: true},
        {name: "pigeon"},
        {name: "pie", fem: true},
        {name: "vautour"},
        {name: "faucon"},
        {name: "rouge-gorge"},
        {name: "tourterelle", fem: true},
        {name: "corneille", fem: true},
    ];
    const adjectives = new Set([
        "cendré",
        "huppé",
        "chantant",
        "hurlant",
        "perché",
        "grand",
        "petit",
        "bleu",
        "pantelant",
        "tangent",
        "arboré",
    ]);

    // your code here
    document.getElementById('run').addEventListener('click', ()=>{
        function randIntGen(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
            }
        let myAdj = Array.from(adjectives);
        let bird = randIntGen(0, birds.length -1);
        let adjective = randIntGen(0, myAdj.length -1);

        if (birds[bird].fem){
            document.getElementById('target').innerHTML = `La ${birds[bird].name} ${myAdj[adjective]}e`;
        }else{
            document.getElementById('target').innerHTML = `Le ${birds[bird].name} ${myAdj[adjective]}`;
        }
        
    });
})();

// 05-arrays/13-find-in-set/script.js - 5.13: Find in a Set


(() => {
    const people = new Set([
        "Nicolas",
        "Nick",
        "Leny",
        "Alexandre",
        "Charlène",
        "Laureline",
        "Esther",
        "Simon",
        "Lucas",
    ]);

    // your code here
    document.getElementById('run').addEventListener('click', ()=>{
        console.log(`there is ${people.size} persons in the set people.`);
        if(people.has("Alexandre")){
            console.log("true Alexandre is in the set people");
        }else{
            console.log("false Alexandre is not in the set people");
        }
        
    });
})();

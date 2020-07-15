// 11-fetch/01-list-to-console/script.js - 11.1: liste vers console


(() => {
    // your code here
    document.getElementById('run').addEventListener('click', ()=>{
        const heroes = fetch('http://localhost:3000/heroes');
        heroes.then(response => response.json())
        .then(heroes => {
            heroes.forEach(hero => {
                console.log(`${hero.id} - ${hero.name}`);
                console.log(hero.alterEgo)
                console.log(`abilities:`)
                hero.abilities.forEach(abil=>{
                    console.log(`       ${abil}`);
                });
                console.log(`------------------------`)
            });
        });
        
    });
})();

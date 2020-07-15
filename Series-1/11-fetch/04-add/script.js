// 11-fetch/04-add/script.js - 11.4: ajouter un élément


(() => {
    // your code here
    document.getElementById('run').addEventListener('click', ()=>{
        var heroName = document.getElementById('hero-name').value;
        var heroAlterEgo = document.getElementById('hero-alter-ego').value;
        var heroPowers = document.getElementById('hero-powers').value;
        console.log(heroName);
    fetch('http://localhost:3000/heroes', {
        method: 'POST',
        headers :{
            "Content-Type": "application/json"
        },
        body:JSON.stringify({
            name:heroName,
            alterEgo:heroAlterEgo,
            abilities:[heroPowers]})
    }).then((res) => res.json())
    .then((data) =>  console.log(data))
    .catch((err)=>console.error(err));
    
    });
})();



(() => {
    // your code here
    document.getElementById('run').addEventListener('click', ()=>{
        
        const heroes = fetch('http://localhost:3000/heroes');
        heroes.then(response => response.json())
            .then(heroes => {
                var temp, name, alterEgo, powers, a, b, c, d;
                var target = document.getElementById("target");
                temp = document.getElementsByTagName("template")[0];
                name = temp.content.querySelector("strong");
                alterEgo = temp.content.querySelector("em");
                powers = temp.content.querySelector("p");
        
                heroes.forEach(hero => {
                    a = document.importNode(name, true);
                    b = document.importNode(alterEgo, true);
                    c = document.importNode(powers, true);
                    a.textContent += hero.name;
                    b.textContent += " " +hero.alterEgo;
                    c.textContent += hero.abilities;

                    target.appendChild(a);
                    target.appendChild(b);
                    target.appendChild(c);
            });
        });
        
    });
})();

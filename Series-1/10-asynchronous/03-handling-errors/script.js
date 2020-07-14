// 10-asynchronous/03-handling-errors/script.js - 10.3: gestion d'erreur


(() => {
    // your code here
    document.getElementById('run').addEventListener('click', ()=>{
        window.lib.getPersons((err, tab)=>{
            if(err) console.error(err) 
            else
                tab.forEach(person => {
                    console.log(person.id);
                    console.log(person.name);
                });
            });
    });
})();

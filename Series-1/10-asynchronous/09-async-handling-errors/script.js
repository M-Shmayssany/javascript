// 10-asynchronous/09-async-handling-errors/script.js - 10.9: gestion d'erreur (async/await)


(() => {
    // your code here
    document.getElementById('run').addEventListener('click', ()=>{
        async function readPersons(){
            
            const getPersons = await window.lib.getPersons();
            
            getPersons.forEach(person => {
                console.log(`${person.id} ${person.name}`);
            });
        }
        readPersons().catch((err)=>{
            console.error("oooops! we get ERROR")
        });
    });
})();

// 10-asynchronous/06-promise-handling-errors/script.js - 10.6: gestion d'erreur (Promise)


(() => {
    // your code here
    document.getElementById('run').addEventListener('click', ()=>{
        
        const promisedPersons = window.lib.getPersons();
    
        promisedPersons.then(persons=>{
            persons.forEach(person => {
                console.log(`${person.id} - ${person.name}`);
            });
        }).catch(err=> console.log(err));
    });

})();

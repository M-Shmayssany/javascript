// 11-fetch/05-delete/script.js - 11.5: supprimer un élément


(() => {
    // your code here
    document.getElementById('run').addEventListener('click', ()=>{
        var id = document.getElementById('hero-id').value;
        fetch(`http://127.0.0.1:3000/heroes/${id}`, {method: 'DELETE'})
        .then(sucess=>{
            console.log(`id:${id} was deleted successfully`);
        }).catch(err=>{
            console.error(err);
        });
    });
})();

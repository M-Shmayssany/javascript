// 10-asynchronous/01-get-posts/script.js - 10.1: chargement d'articles


(() => {
    // your code here
    
    document.getElementById('run').addEventListener('click', ()=>{
        window.lib.getPosts((_, art)=>{
            art.forEach(element => {
                console.log(element.id);
                console.log(element.title);
                console.log(element.content);
                console.log(element.author);
            });
        });

    });
    
})();

// 10-asynchronous/02-get-comments/script.js - 10.2: chargement d'articles et de commentaires


(() => {
    // your code here
    document.getElementById('run').addEventListener('click', ()=>{
        window.lib.getPosts((_, art)=>{
            
            art.forEach(element => {
                console.log(element.id);
                console.log(element.title);
                console.log(element.content);
                console.log(element.author);
                window.lib.getComments(element.id, (_,tab)=>{
                    tab.forEach(comment=>{
                        console.log(element.id);
                        console.log(comment.id);
                        console.log(comment.content)
                    });
                });
            });
        });

    });
})();

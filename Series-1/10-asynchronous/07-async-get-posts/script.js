// 10-asynchronous/07-async-get-posts/script.js - 10.7: chargement d'articles (async/await)


(() => {
    // your code here
    document.getElementById('run').addEventListener('click', ()=>{
        async function readPosts(){
            const getPosts = await window.lib.getPosts();

            
                getPosts.forEach(post => {
                    console.log("////////////////////////////////////")
                    console.log(`${post.id} Author: ${post.author}`);
                    console.log(`Title : ${post.title}`);
                    console.log(`___________________________________`);
                    console.log(post.content);
                    console.log("...................................")
                });
            
        }
        
        readPosts();

    });
})();

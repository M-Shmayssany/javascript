// 10-asynchronous/08-async-get-comments/script.js - 10.8: chargement d'articles et de commentaires (async/await)


(() => {
    // your code here
    document.getElementById('run').addEventListener('click', ()=>{
/*         async function readComments(id){
            const getComments = await window.lib.getComments(id);
            getComments.forEach(comment=>{
                console.log(`${id} ${comment.id} ${comment.author}`);
                console.log(comment.content);
            });
        }
 */        async function readPosts(){
            const getPosts = await window.lib.getPosts();
            getPosts.forEach(async post => {
                const getComments = await window.lib.getComments(post.id);
                console.log("////////////////////////////////////")
                console.log(`${post.id} Author: ${post.author}`);
                console.log(`Title : ${post.title}`);
                console.log(`___________________________________`);
                console.log(post.content);
                console.log("...................................")
                getComments.forEach(comment=>{
                    console.log(`${post.id} ${comment.id} ${comment.author}`);
                    console.log(comment.content);
                });
            });
        }
        readPosts();
    });
})();

// 10-asynchronous/05-promise-get-comments/script.js - 10.5: chargement d'articles et de commentaires (Promise)


(() => {
    // your code here

    document.getElementById('run').addEventListener('click', ()=>{
        
        const promisedPosts = window.lib.getPosts();
    
        promisedPosts.then(posts=>{
            posts.forEach(post => {
                const promisedComments  = window.lib.getComments(post.id);
                promisedComments.then(comments=>{
                    console.log("////////////////////////////////////")
                    console.log(`${post.id} Author: ${post.author}`);
                    console.log(`Title : ${post.title}`);
                    console.log(`___________________________________`);
                    console.log(post.content);
                    console.log("...................................")
                    comments.forEach(comment=>{
                        console.log(`${comment.id} ${comment.author}`);
                        console.log(comment.content);
                    });
                });
            });
        });
    });
})();


// 01-base/03-prompt-if/script.js - 1.3: promp & if

(() => {
  // Don't bother with that, look at your browser's console(chrome), you can delete it afterwards ;)
  console.log('%c ', 'padding: 38px; background:url(https://becode.org/app/uploads/2020/03/bc_mailsign_seal.png) no-repeat;');
  console.log('Hello Woods programmer');

  // YOUR CODE HERE
  let userAnswer = prompt("hi user do you want a cake? [yes/no]");

  if(userAnswer == "yes"){
    alert("congratulation user you have won a free cake!");
  }else{
    alert("More cake for me then :p !");
  }

})();


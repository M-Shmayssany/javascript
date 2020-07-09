
// 01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation

(() => {
    // Don't bother with that, look at your browser's console(chrome), you can delete it afterwards ;)
    console.log('%c ', 'padding: 38px; background:url(https://becode.org/app/uploads/2020/03/bc_mailsign_seal.png) no-repeat;');
    console.log('Hello Woods programmer');

    // YOUR CODE HERE
    let userAge, userGender, userTown;
    let state = false;
    while(!state){
        userAge = prompt("please enter you age: ");
        userGender = prompt("Gender [Male/Female] : ");
        userTown = prompt("Address: ");
        if (confirm("age: " + userAge + " gender: " + userGender + " address: " + userTown)) {
            alert("thank you for the info.");
            state = true;
        } else {
            alert("Please enter again");
            state = false;
        } 
    }
})();

//07-classes/02-methods/script.js - 7.2: methods


(() => {
    // your code here
    class Person{
        constructor(firstname, lastname){
            this.firstname = firstname,
            this.lastname = lastname
        }
        sayHello(){
            return console.log(`Hello ${this.firstname} ${this.lastname}`);
        }
    }

    document.getElementById('run').addEventListener('click', ()=>{
        let person = new Person("mohamed", "Shmayssany");
        person.sayHello();
    });
})();

// 07-classes/04-getter-setter/script.js - 7.4: getter & setter


(() => {
    // your code here
    class Person{
        constructor(firstname, lastname){
            this.firstname = firstname,
            this.lastname = lastname
        }
        get name(){
            return `${this.firstname} ${this.lastname}`;
        }
        set name(name){
            let nameArr =  name.split(' ');
            this.firstname = nameArr[0];
            this.lastname = nameArr[1];
        }
    }
    document.getElementById('run').addEventListener('click', ()=>{
        let personOne = new Person("jon", "smith");
        console.log(personOne.name);
        personOne.name = "mohamed shmayssany";
        console.log(personOne.name);
    });
})();

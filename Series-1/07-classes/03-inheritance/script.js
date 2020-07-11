// 07-classes/03-inheritance/script.js - 7.3: inheritance


(() => {
    class Animal {
        sayHello() {
            return `${this.constructor.greeting}! I'm ${this.name}!`;
        }
    }
    //TODO your code here 
    document.getElementById('run').addEventListener('click', ()=>{
        Animal.constructor.name = this.name;
        Animal.constructor.greeting = 'hello';
        let cat = new Animal("cat");
        console.log(cat.sayHello());
    });
})();

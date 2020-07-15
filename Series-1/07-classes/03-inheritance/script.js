// 07-classes/03-inheritance/script.js - 7.3: inheritance


(() => {
    class Animal {
        sayHello() {
            return `${this.constructor.greeting}! I'm ${this.name}!`;
        }
    }

    
    //your code here 
    class Cat extends Animal {
        constructor(){
            super();
            this.name = name,
            this.constructor.greeting = "meooow Hello"
        }

    }
    class Dog extends Animal {
        constructor(){
            super();
            this.name = name,
            this.constructor.greeting = "ruff-ruff Hello"
        }

    }

    document.getElementById('run').addEventListener('click', ()=>{
        let cat = new Cat;
        let dog = new Dog
        cat.name = 'kit';
        dog.name = 'ploto';
        console.log(cat.sayHello());
        console.log(dog.sayHello());
        
    });
})();

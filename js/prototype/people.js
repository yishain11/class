function Person(name,age){
    this.name = name;
    this.age = age;
    this.greet = ()=>{
        console.log(`my name is: ${this.name} my age is: ${this.age}`);
        
    };
    this.sayHi = ()=>{
        console.log(`hi`);
        
    }
}

const p = new Person("yishai",36);

function Student(){
    this.classes = [];
}

const s = new Student();

// how can we make s.sayHi work?

// prototypes!

Object.setPrototypeOf(s,p);
s.sayHi();
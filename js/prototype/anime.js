function Animal(name,sound){
    this.name = name;
    this.sound = sound;
    this.makeSound = ()=>{
        console.log(`my sound is: ${this.sound}`);
        
    };
}

const dog = new Animal("bob","how how");
const cat = new Animal("alice","miao miao");

dog.makeSound();
cat.makeSound();

// prototypes
console.log(Object.getPrototypeOf(dog));
console.log(Object.getPrototypeOf(cat));
console.log(Object.getPrototypeOf(cat)===Object.getPrototypeOf(dog));

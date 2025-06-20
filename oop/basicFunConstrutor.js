function Person(name){
    this.name = name;
    this.greet = function(){
        console.log("hi there",this.name);
        
    }
}

const yishai = new Person("yishai");
yishai.greet();
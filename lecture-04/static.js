class Dog{
    constructor(name){
        this._name = name;
    }

    introduce(){
        console.log('This is '+ this._name+'!');
        console.log(`This dog name is ${this._name} !`);
    }

    static bark(){
        console.log('Woof! Woof!');
    }
}

const myDog = new Dog('Buster');
myDog.introduce();

Dog.bark();
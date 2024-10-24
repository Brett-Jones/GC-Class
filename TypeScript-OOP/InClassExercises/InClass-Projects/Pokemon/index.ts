
// let age: number = 50;
// let userName: string = 'Bob Ross';
// let isTeacher: boolean = true;

// let city: string = "LA";

// const pi: number = 3.1459;

// let scores: number[] = [90,85,88];
// let names: string[] = ['Alice', 'Bob', 'Liz'];


// let result: string | number; //not advised

// const add = (a: number, b: number) => {
//     return a + b;
// }

// const multiply = (x: number, y: number): number => {
//     return x * y;
// }

// const greet = (name:string, greeting?: string): string => {
//     if(greeting){
//         return `${greeting}, ${name}`;
//     } else {
//         return `Hello, ${name}`;
//     }
// } 

// const greetWithDefault = (name: string, greeting: string = "hello"): string => {
//     return `${greeting}, ${name}`;
// }

// const logMessage = (message: string): void => {
//     console.log(message);
// }

// class Animal {
//     userName: string;
//     age: number;

//     constructor(userName: string, age: number){
//         this.userName = userName;
//         this.age = age;
//     }

//     makeSound(): string{
//         return `${this.userName} is ${age}`
//     }
//     describe():void{
//         console.log(`${this.userName} is ${this.age} years old and is really cool`);
//     }

// }

// const myAnimal = new Animal('Luna', 3);
// myAnimal.age = 4;
// console.log(myAnimal.makeSound());
// const butterBall = new Animal('Butterball', 3);
// console.log(butterBall.makeSound());

// class Dog extends Animal{
//     breed: string;

//     constructor(userName: string, age: number, breed: string) {
//         super(userName, age);
//         this.breed = breed;
//     }

//     fetch(): void{
//         console.log(`${this.userName}, is fetching`)
//     }
// }

// const cujo = new Dog('Cujo', 8, 'Malamute');

// console.log(cujo.userName);
// console.log(cujo.age)
// cujo.fetch();

// class Rabbit extends Animal {
//     color: string;
//     hop: number;

//     constructor(userName: string, age: number, color: string, hop: number){
//         super(userName, age);
//         this.color = color;
//         this.hop = hop;
//     }

//     hopDistance(): void{
//         console.log(`${this.userName}, can hop ${this.hop} inches`)
//     }

// }

// const cq = new Rabbit('Cq', 2, "white & light brown", 18)

// cq.hopDistance();
// cq.describe();
// cq.makeSound();





class Pokemon{
    userName: string;
    health: number;

    constructor(userName: string, health: number){
        this.userName = userName;
        this.health = health;
    }
    //make maybe a random# for takeDamage
    attack(target: Pokemon): void {
        console.log(`${this.userName} attacks ${target.userName}!`)
        target.takeDamage(10);
    }

    takeDamage(amount: number): void{
        this.health -= amount;
        console.log(`${this.userName} takes ${amount} damage! Health is now ${this.health}.`)
    }

    roar(): void{
        console.log(`${this.userName}, roars with intensity!!!`)
    }
}

class FirePokemon extends Pokemon{
    firePower: number;

    constructor(userName: string, health: number, firePower: number){
        super(userName, health)
        this.firePower = firePower;
    }

    attack(target: Pokemon): void {
        console.log(`${this.userName} breathes fire at ${target.userName}`)
        const damage = 15 + this.firePower;
        target.takeDamage(damage);
    }

    ignite(): void{
        console.log(`${this.userName} ignites itself, boosting fire power!!!`)
        this.firePower += 5;
    }

}


class WaterPokemon extends Pokemon{
    waterLevel: number;

    constructor(userName: string, health: number, waterLevel: number){
        super(userName, health);
        this.waterLevel = waterLevel;
    }

    attack(target: Pokemon): void {
        console.log(`${this.userName} blasts water at ${target.userName}!`)
        const damage = 10 + this.waterLevel;
        target.takeDamage(damage);
    }

    heal(): void{
        console.log(`${this.userName} uses water to heal itself`)
        this.health += 20;
        console.log(`${this.userName}'s health is now ${this.health}.`)
    }
}

const charizard = new FirePokemon("Charizard", 100, 10);
charizard.attack(charizard);

const squirtle = new WaterPokemon("Squirtle", 100, 15)

charizard.attack(squirtle);
squirtle.heal();










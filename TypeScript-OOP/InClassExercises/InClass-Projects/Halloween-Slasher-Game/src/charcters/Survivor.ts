
import { Weapon } from "../weapons";
import { Slasher } from "./Slasher";


export class Survivor {

    name: string;
    health: number;
    weapon: Weapon;

    constructor( name: string, health: number, weapon: Weapon) {

        this.name = name;
        this.health = health;
        this.weapon = weapon;
    }

    attack(target: Survivor){
        console.log(` ${this.name}, attacks ${target.name} with a ${this.weapon.name}`)
        target.takeDamage(this.weapon.damage);
    }

    takeDamage(amount:number):void {
        this.health -= amount;
        console.log(`${this.name}, takes ${amount} damage! Health is now ${this.health}`)
    }

    run(): void{
        console.log(`${this.name} tries to run away!`)
    }

    superPower(): void{
        console.log(`This is even my final form: LEROY JENKINSSSSS!!!!!!`)
    }

}















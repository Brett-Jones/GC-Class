
import { Survivor } from "./Survivor";
import { Weapon } from "../weapons";

export class Slasher {

    name: string;
    health: number;
    weapon: Weapon;

    constructor(name: string, health: number, weapon: Weapon){
        this.name = name;
        this.health = health;
        this.weapon = weapon;
    }

    attack(target: Survivor){
        console.log(` ${this.name}, attacks ${target.name} with a ${this.weapon.name}`)
        target.takeDamage(this.weapon.damage);
    }

}
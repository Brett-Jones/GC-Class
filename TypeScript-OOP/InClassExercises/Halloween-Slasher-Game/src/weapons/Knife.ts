import { Weapon } from "./Weapon"

export class Knife extends Weapon {
    //class has to have constructor
    constructor(){
        super('Knife', 20)
    }

    use(): void{
        console.log(`The knife is used to slash!!!, causing ${this.damage} damage.`)
    }
}










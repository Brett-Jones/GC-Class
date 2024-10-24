
export class Weapon {

    name: string;
    damage: number;
   
    constructor( name: string, damage: number){
        this.name = name;
        this.damage = damage;
    }

    //void means it returns nothing
    use(): void{
        console.log(`${this.name} is used, causing ${this.damage} damage.`);
    }
}










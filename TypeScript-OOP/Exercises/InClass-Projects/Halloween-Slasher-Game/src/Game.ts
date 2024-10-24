
import { Slasher, Survivor } from "./charcters";
import { Chainsaw, Knife } from "./weapons";

export class Game {
    start(): void{
        const chainsaw = new Chainsaw();
        const jason = new Slasher('Hash Slinging Slasher', 100, chainsaw);
        const finalGirl = new Survivor('Laurie', 80, chainsaw);
        
        console.log("The game begins....");
        jason.attack(finalGirl);
        finalGirl.run();
    }
}



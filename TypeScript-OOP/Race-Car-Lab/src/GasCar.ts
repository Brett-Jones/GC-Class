
import { Racer } from "./Racer";

export class GasCar implements Racer{

    team: string;
    speed: number;
    fuel: number;

    constructor(team: string, speed: number, fuel: number){
    
        this.team = team;
        this.speed = speed;
        this.fuel = fuel;
    }

    accelerate(): void {
        this.speed + 2;
        this.fuel - 1;
    }

    isFuelEmpty(): boolean {
        if(this.fuel <= 0){
            return true
        }   else{
            return false
        }
        
    }

}

















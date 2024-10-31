import { Vehicle } from "./Vehicle";

export class AirVehicle extends Vehicle{

    yPosition: number

    constructor(yPosition: number) {
        super();
        this.yPosition = yPosition;
    }

    moveUp(): void{
        if(this.yPosition < 10){
            this.yPosition += 1;
        
        }     
    }
}
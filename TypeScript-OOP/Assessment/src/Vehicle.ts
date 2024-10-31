
export class Vehicle {

    xPosition: number;

    constructor(){
        this.xPosition = 0;;
    }
    
    moveForward(distance: number): void {
        this.xPosition += distance;
    }
}














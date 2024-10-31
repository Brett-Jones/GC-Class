
import { Plant } from "./Plants";

export class ClimbingPlant extends Plant {

    width: number;

    constructor(width: number) {
        super();
        this.width = width;
    }

    expand(): void{
        if(this.width < 10){
        this.width += 1;
        }
    }
    checkGrowthStatus(): void {
        this.fullyGrown = this.height >=10 && this.width >= 10;
    }
}








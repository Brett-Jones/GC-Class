
export class Plant {

    height: number;
    fullyGrown: boolean;

    constructor() {
        this.height = 0;
        this.fullyGrown = false;
    }

    grow(amount: number): void{
        this.height += amount;
    }

    checkGrowthStatus(): void{
        this.fullyGrown = this.height >= 10;
    }

}












export interface Racer {
    team: string;
    speed: number;

    accelerate(): void;

    isFuelEmpty(): boolean;
}

const findRacersWithEmptyFuel = (racers: Racer[]) => {

    racers.forEach((racer: Racer) =>{
        if(racer.isFuelEmpty()){
            return racers;
        } 
    });
    findRacersWithEmptyFuel(racers);
}











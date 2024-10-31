
import { Plant } from "./Plants";

export function describePlantHeight(plant: Plant): string {
    return `This plant is at height ${plant.height}.`;
}

export function growPlants(plants: Plant[], amount: number): void {
    plants.forEach(
        plant => plant.grow(amount)
    );
}



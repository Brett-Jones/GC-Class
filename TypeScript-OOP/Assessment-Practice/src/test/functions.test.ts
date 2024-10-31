
import { Plant } from "../Plants";
import { ClimbingPlant } from "../ClimbingPlants";
import { describePlantHeight } from "../functions";
import { growPlants } from "../functions";

describe("describePlantHeight function", () => {
    it("should describe the height of a plant", () => {
        const plant = new Plant();
        expect(describePlantHeight(plant)).toBe('This plant is at height 0');
    });
});

describe("growPlants function", () => {
    
    it("should increase height of all plants in array by the specified amount", () => {
        const plant = new Plant();
        const climbingPlant = new ClimbingPlant(5);
        const plants = [plant, climbingPlant];

        growPlants(plants, 3);
        expect(plant.height).toBe(3);
        expect(climbingPlant.height).toBe(3);
    });
});













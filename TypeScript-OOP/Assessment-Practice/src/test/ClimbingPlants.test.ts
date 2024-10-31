
import { ClimbingPlant } from "../ClimbingPlants";

describe("ClimbingPlant", () => {
    it("should init height to 0 & width from construction", () => {
        const plant = new ClimbingPlant(4);
        expect(plant.height).toBe(0);
        expect(plant.width).toBe(0);
    });
    it("should increase width by 1 when expand is called", () => {
        const plant = new ClimbingPlant(4);
        plant.expand();
        expect(plant.width).toBe(5);
    });
    it("should not increase width beyond 10", () => {
        const plant = new ClimbingPlant(10);
        plant.expand();
        expect(plant.width).toBe(10);
    });
});








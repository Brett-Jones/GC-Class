
import { Plant } from "../Plants";

describe("Plant Class", () => {
    it("should init height to 0", () => {
        const plant = new Plant();
        expect(plant.height).toBe(0);
    });
    it("should increase height by the given amount", () => {
        const plantTest2 = new Plant();
        plantTest2.grow(5);
        expect(plantTest2.height).toBe(5);
    });
    it("should increase height by the given amount twice", () => {
        const plantTest3 = new Plant();
        plantTest3.grow(5);
        plantTest3.grow(8);
        expect(plantTest3.height).toBe(8);
    });
    it("should set fullGrown to true if height reaches 10", () => {
        const plant = new Plant();
        plant.grow(20);
        plant.checkGrowthStatus();
        expect(plant.fullyGrown).toBe(true);
    });
});















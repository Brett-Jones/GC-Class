import { SolarCar } from "../src/SolarCar";

describe("SolarCar", () => {
    it("team property is set from the constructor parameter", () => {
        const car = new SolarCar("Chevy", 0)
        expect(car.team).toBe("Chevy")
    })
    it("speed property starts at 0", () => {
        const car = new SolarCar("Chevy", 0)
        expect(car.speed).toBe(0)
    })
    it("Calling accelerate() once brings speed to 1", () => {
        const car = new SolarCar("Chevy", 1)
        car.accelerate()
        expect(car.speed).toBe(1)
    })
    it("Calling accelerate() twice brings speed to 2", () => {
        const car = new SolarCar("Chevy", 0)
        car.accelerate()
        car.accelerate()
        expect(car.speed).toBe(0)
    })
    it("isFuelEmpty() returns false", () => {
        const car = new SolarCar("Chevy", 2)
        const fuelCheck = car.isFuelEmpty()
        expect(fuelCheck).toBe(false)
    })
});
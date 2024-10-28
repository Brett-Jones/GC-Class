import { GasCar } from "../src/GasCar";

describe("GasCar", () => {
    it("team property is set from the constructor parameter", () => {
        const car = new GasCar("Chevy", 0, 10)
        expect(car.team).toBe("Chevy")
    })
    it("fuel property is set from the constructor parameter", () => {
        const car = new GasCar("Chevy", 0, 10)
        expect(car.fuel).toBe(10)
    })
    it("speed property starts at 0", () => {
        const car = new GasCar("Chevy", 0, 10)
        expect(car.speed).toBe(0)
    })
    it("Calling accelerate() once brings speed to 1", () => {
        const car = new GasCar("Chevy", 0, 10)
        car.accelerate()
        expect(car.speed).toBe(2)
    })
    it("Calling accelerate() twice brings speed to 2", () => {
        const car = new GasCar("Chevy", 0, 10)
        car.accelerate()
        car.accelerate()
        expect(car.speed).toBe(4)
    })
    it("Calling accelerate() once reduces fuel by 1", () => {
        const car = new GasCar("Chevy", 0, 10)
        car.accelerate()
        expect(car.fuel).toBe(9)
    })
    it("Calling accelerate() twice reduces fuel by 2", () => {
        const car = new GasCar("Chevy", 0, 10)
        car.accelerate()
        car.accelerate()
        expect(car.fuel).toBe(8)
    })
    it("isFuelEmpty() returns true when fuel is 0", () => {
        const car = new GasCar("Chevy", 2, 0)
        const fuelCheck = car.isFuelEmpty()
        expect(fuelCheck).toBe(true)
    })
    it("isFuelEmpty() returns false when fuel is greater than 0", () => {
        const car = new GasCar("Chevy", 2, 10)
        const fuelCheck = car.isFuelEmpty()
        expect(fuelCheck).toBe(false)
    })
})
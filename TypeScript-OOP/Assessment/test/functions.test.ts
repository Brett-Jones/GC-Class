
import { AirVehicle } from "../src/AirVehicle";
import { Vehicle } from "../src/Vehicle";
import { describeVehicleXPosition } from "../src/functions";
import { moveVehiclesForward } from "../src/functions";

describe("describeVehicleXPosition function", () => {
  it("Vehicle starts a xPosition 0, call describeVehicleXPosition, return 'This vehicle is at X position 0.'", () => {
    const vehicle = new Vehicle();
    describeVehicleXPosition(vehicle)
    expect(vehicle.xPosition).toBe(0);
  });
});

describe("moveVehiclesForward function", () => {
  it("Array that has 1 Vehicle & 1 AirVehicle. Pass moveVehiclesForward. Confirm both vehicles have xPosition increased by given distance.", () => {
    const vehicle = new Vehicle();
    const airVehicle = new AirVehicle(0);
    const array = [vehicle, airVehicle]
    moveVehiclesForward(array, 0)

    expect(vehicle.xPosition).toBe(0);
    expect(airVehicle.yPosition).toBe(0);
  });
});
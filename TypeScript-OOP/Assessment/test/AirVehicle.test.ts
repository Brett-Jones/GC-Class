
import { AirVehicle } from "../src/AirVehicle";

describe("AirVehicle class", () => {
  it("AirVehicle has yPostition set from the constructor & xPosition set to 0", () => {
    const vehicle = new AirVehicle(0);
    expect(vehicle.yPosition).toBe(0);
  });
  it("Calling moveUp increases the yPosition by one", () => {
    const vehicle = new AirVehicle(0);
    vehicle.moveUp();
    expect(vehicle.yPosition).toBe(1);
  });
  it("Calling moveUp does not increase the yPosition if yPosition is already 10", () => {
    const vehicle = new AirVehicle(10);
    vehicle.moveUp();
    expect(vehicle.yPosition).toBe(10);
  });
});
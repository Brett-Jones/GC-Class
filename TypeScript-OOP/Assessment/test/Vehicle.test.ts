
import { Vehicle } from "../src/Vehicle";



describe("Vehicle class", () => {
  it("Confirm that a new instance of Vehicle has xPosition set to 0", () => {
    const vehicle = new Vehicle();
    expect(vehicle.xPosition).toBe(0);
  });
  it("Calling moveForward once increases the xPosition by the given distance", () => {
    const vehicle = new Vehicle();
    vehicle.moveForward(5);
    expect(vehicle.xPosition).toBe(5);
  });
  it("Calling moveForward twice increases the xPosition by the combined distance", () => {
    const vehicle = new Vehicle();
    vehicle.moveForward(5);
    vehicle.moveForward(5);
    expect(vehicle.xPosition).toBe(10);
  });
});
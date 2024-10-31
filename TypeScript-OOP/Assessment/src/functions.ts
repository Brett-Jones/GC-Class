
import { Vehicle } from "./Vehicle";

export function describeVehicleXPosition(vehicle: Vehicle){
    return `This vehicle is at X position ${vehicle.xPosition}`
}

export function moveVehiclesForward(vehicle: Vehicle[], distance: number){

    vehicle.forEach(
        vehicle => vehicle.moveForward(distance)
    )
}







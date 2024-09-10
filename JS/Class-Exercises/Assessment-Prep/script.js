// Create a file named robotFactory.js Complete all of the following tasks in that file. Each task is worth on point unless

//      Declare a function named startUpSequence
//      Parameter(s): n/a
//      Functionality: Uses a loop to log, one by one, the numbers 3, 2, 1 and then log "Start!" at the end.


// const startUpSequence = () => {
//     for(let i = 3; i >= 1; i--){
//         console.log(i);
//     }

//     console.log("Start not the other thing");
// }

// startUpSequence()

//  Declare a function named chargeBattery
//      Parameter(s): startLevel, endLevel these are numbers
//      Functionality: Uses a loop to log, one by one, 
//      the battery levels from the startLevel through endLevel, including both.
      
// const chargeBattery = (startLevel, endLevel) => {
//     for(let i = startLevel; i <= endLevel; i++){
//     console.log(i);
    
//     }
// }

// chargeBattery(0, 10);
// console.log("Battery is fully charged")


// const chargeBattery2 = (startLevel, endLevel) => {

//     while(startLevel <= endLevel){
//         console.log(startLevel);
//         startLevel++;
//     }

//     console.log("Battery is fully charged")
// }

// chargeBattery(0, 10);






// Declare a function named batteryStatus

//


const batteryStatus = (batteryLevel) => {

    if(batteryLevel <= 10){
        console.log("Battery Empty");

    } else if (batteryLevel > 10 && batteryLevel < 50) {
        console.log("Battery Low")

    }else {
        console.log("Battery Charged")
    }
}

batteryStatus(9);

const isShort = (robotName) => {
    return robotName.length <= 5 ? true : false;
}

let result = isShort("Walle");
console.log(result);


let robots = [
    {model: 'Alpha', power: 80, cost: 1500, isAutonomous: false},
    {model: 'Beta', power: 100, cost: 2000, isAutonomous: true},
    {model: 'Gamma', power: 60, cost: 1200, isAutonomous: false},
    {model: 'Delta', power: 90, cost: 1800, isAutonomous: true}
]

function buildRobot (robotArray, model, power, cost, isAutonomous){
    // Inside the new object you want to write out the parameters of the prior object
    let newRobot = {
        model: model,
        power: power,
        cost: cost,
        isAutonomous: isAutonomous
    };
    robotArray.push(newRobot);
}

buildRobot(robots, 'Johnny 5', 100, 2000, true);
buildRobot(robots, 'Legion', 100, 100000, true);
buildRobot(robots, 'RoboCop', 100, 10000, true);
buildRobot(robots, 'Marcus', 100, 10000, true);
buildRobot(robots, 'ChatGPT', 100, 30, false);

console.log(robots);
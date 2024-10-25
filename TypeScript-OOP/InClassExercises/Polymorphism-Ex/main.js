"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Contractor = exports.PartTimeEmployee = exports.FulltimeEmployee = void 0;
// export class Employee {
//     constructor(public name: string) {}
//         getCalculateSalary(): number {
//             return 0;
//         }
//         displayInfo(): void {
//             console.log(`${this.name} earns $${this.getCalculateSalary()}`)
//         }
// }
class FulltimeEmployee {
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
    }
    //You can you use a public function in scope with a value that is set to private
    calculateSalary() {
        return this.salary;
    }
    displayInfo() {
        return this.salary;
    }
}
exports.FulltimeEmployee = FulltimeEmployee;
class PartTimeEmployee {
    constructor(name, hourlyRate, hoursWorked) {
        this.name = name;
        this.hourlyRate = hourlyRate;
        this.hoursWorked = hoursWorked;
    }
    calculateSalary() {
        return this.hourlyRate * this.hoursWorked;
    }
    displayInfo() {
        return this.salary;
    }
}
exports.PartTimeEmployee = PartTimeEmployee;
class Contractor {
    constructor(name, hourlyRate, hoursWorked) {
        this.name = name;
        this.hourlyRate = hourlyRate;
        this.hoursWorked = hoursWorked;
    }
    displayInfo() {
        this.calculateSalary;
    }
    calculateSalary() {
        return this.hourlyRate * this.hoursWorked;
    }
}
exports.Contractor = Contractor;
function showSalaryDetails(person) {
    person.displayInfo();
}
const fulltimeEmp = new FulltimeEmployee("Brandon", 1000000);
const partTimeEmp = new PartTimeEmployee("Nailah", 250, 20);
const contract = new Contractor("Ryan", 5000, 1);
showSalaryDetails(fulltimeEmp);
showSalaryDetails(partTimeEmp);
showSalaryDetails(contract);

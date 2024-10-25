
// interface WorkFam {
//     name: string;
//     calculateSalary(): number;
//     displayInfo(): void;
// }

// export class Employee {

//     constructor(public name: string) {}

//         getCalculateSalary(): number {
//             return 0;
//         }

//         displayInfo(): void {
//             console.log(`${this.name} earns $${this.getCalculateSalary()}`)
//         }
// }


// export class FulltimeEmployee implements WorkFam{

//     constructor(public name: string, private salary: number) {
        
//     }
//     //You can you use a public function in scope with a value that is set to private
//     calculateSalary(): number {
//         return this.salary
//     }

//     displayInfo(): number{
//         return this.salary;
//     }
// }

// export class PartTimeEmployee implements WorkFam{
//     salary: number;

//     constructor(public name:string, private hourlyRate: number, private hoursWorked: number) {
        
//     }

//     calculateSalary(): number {
//         return this.hourlyRate * this.hoursWorked;
//     }

//     displayInfo(): number{
//         return this.salary;
//     }
    
// }

// export class Contractor implements WorkFam{

//     constructor(public name:string, private hourlyRate: number, private hoursWorked: number) {
        
//     }
//     displayInfo(): void {
//         this.calculateSalary;
//     }

//     calculateSalary(): number {
//         return this.hourlyRate * this.hoursWorked;
//     }
// }


// function showSalaryDetails(person: WorkFam){
//     person.displayInfo();
// }

// const fulltimeEmp = new FulltimeEmployee("Brandon", 1000000);
// const partTimeEmp = new PartTimeEmployee("Nailah", 250, 20);
// const contract = new Contractor("Ryan", 5000, 1);

// showSalaryDetails(fulltimeEmp);
// showSalaryDetails(partTimeEmp);
// showSalaryDetails(contract);


interface Character{
    name: string;
    health: number;
    attack(): string;
    takeDamage(amount:number): void;
    specialMove(): string;
}

//interface means interface from another Class = inforces the values
//extend means it will define the values of the Class = inherates the values

class BaseCharacter implements Character{
    name: string;
    health: number;

    constructor(name: string, health: number) {
        this.name = name;
        this.health = health;
    }
        attack(): string {
            return `${this.name} attacks with a basic weapon`;
        }
        takeDamage(amount: number): void {
            this.health -= amount;
            console.log(`${this.name} takes ${amount} damage! Health left: ${this.health}`)
        }
        specialMove(): string {
            return `${this.name} uses special move`;
        }

    }


class Warrior extends BaseCharacter{

    constructor(name: string, health: number){
        super(name, health);
    }
    attack(): string{
        return `${this.name} swings a mighty sword!`
    }

    specialMove(): string {
        return `${this.name} charges forward with a shield bash!!!`
    }
}

class Wizard extends BaseCharacter {
    constructor(name: string, health: number) {
        super(name, health);
    }
    attack(): string{
        return `${this.name} casts a fire ball!`
    }

    specialMove(): string {
        return `${this.name} summons a mystical barrier of protection!`
    }
}


const aragorn = new Warrior("Aragorn", 120);
const guts = new Warrior("Guts", 100)
const gandalf = new Wizard("Gandolf", 100)

const characters: Character[] = [aragorn, gandalf, guts];

characters.forEach(character => {
    console.log(character.attack);
    console.log(character.specialMove());
    character.takeDamage(25);
});
